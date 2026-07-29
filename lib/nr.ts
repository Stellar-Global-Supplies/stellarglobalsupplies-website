/**
 * New Relic Browser Agent — thin helper
 * ════════════════════════════════════════
 * File: lib/nr.ts   (place alongside lib/blog.ts)
 *
 * Single wrapper used by every component. Two reasons:
 *  1. Guards every call with window.newrelic? — safe if agent is blocked.
 *  2. Attaches the "stellar.service" attribute automatically so every
 *     event in New Relic is filterable by  appName = 'stellarglobalsupplies-website'.
 *
 * USAGE
 * ──────
 *   import { nr } from "@/lib/nr";
 *
 *   nr("EnquireNow", { product_category: "mild-steel" });
 *   nr("ProductTabViewed", { tab_id: "stainless-steel" });
 *   nr("ChatWidgetOpen");
 *   nr("ScrollDepth", { depth_pct: 75 });
 *
 * NRQL to query:
 *   SELECT count(*) FROM PageAction
 *   WHERE actionName = 'EnquireNow'
 *   SINCE 24 hours ago
 */

/** Shared attributes attached to every PageAction event */
const BASE_ATTRS = {
    "stellar.service": "stellarglobalsupplies-website",
    "stellar.env":     process.env.NODE_ENV ?? "production",
  } as const;
  
  /**
   * Fire a named New Relic PageAction event.
   *
   * @param name   PascalCase event name   e.g. "EnquireNow"
   * @param attrs  Optional key/value pairs merged with base attrs
   */
  export function nr(
    name: string,
    attrs?: Record<string, string | number | boolean>
  ): void {
    if (typeof window === "undefined") return;         // SSG/SSR safety
    window.newrelic?.addPageAction(name, {
      ...BASE_ATTRS,
      ...attrs,
    });
  }
  
  /**
   * Report an error manually to New Relic.
   * Appears in JavaScriptError — same table as uncaught errors.
   *
   * @param error   The Error object
   * @param attrs   Extra context attached to the error row
   */
  export function nrError(
    error: Error,
    attrs?: Record<string, string | number | boolean>
  ): void {
    if (typeof window === "undefined") return;
    window.newrelic?.noticeError(error, { ...BASE_ATTRS, ...attrs });
  }
  
  /**
   * One-time scroll-depth tracker.
   * Call once from a top-level layout or page component.
   * Fires ScrollDepth PageAction at 25 / 50 / 75 / 90 / 100 %.
   *
   * Returns a cleanup function — call it from useEffect cleanup.
   *
   * @example
   *   useEffect(() => {
   *     const cleanup = initScrollDepth();
   *     return cleanup;
   *   }, []);
   */
  export function initScrollDepth(): () => void {
    if (typeof window === "undefined") return () => {};
  
    const MILESTONES = [25, 50, 75, 90, 100] as const;
    const fired = new Set<number>();
  
    const handler = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((window.scrollY / scrollable) * 100);
  
      for (const m of MILESTONES) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          nr("ScrollDepth", { depth_pct: m });
        }
      }
    };
  
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }