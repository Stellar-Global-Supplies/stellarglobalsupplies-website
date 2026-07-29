/**
 * New Relic Browser Agent — TypeScript global type declarations
 *
 * Drop this file into your project root (alongside tsconfig.json).
 * It is picked up automatically by the TypeScript compiler because
 * tsconfig.json already has  "include": ["**\/*.ts", "**\/*.tsx"].
 *
 * WHAT THIS GIVES YOU
 * ─────────────────────
 * window.newrelic is typed throughout every component — no "possibly
 * undefined" suppression needed, no // @ts-ignore hacks.
 */

interface NewRelicBrowserAgent {
    /**
     * Record a named custom event (appears as PageAction in NRQL).
     *
     *   FROM PageAction WHERE actionName = 'EnquireNow'
     *
     * @param name    Event name — use PascalCase, no spaces.
     * @param attrs   Key/value pairs attached to every event row.
     *                Values must be string, number, or boolean.
     */
    addPageAction(
      name: string,
      attrs?: Record<string, string | number | boolean>
    ): void;
  
    /**
     * Attach a custom attribute to every event sent in this page session.
     * Useful for user segments, A/B test variants, build version.
     *
     * @param key   Attribute name.
     * @param value String or number value.
     */
    setCustomAttribute(key: string, value: string | number): void;
  
    /**
     * Manually report a JavaScript error.
     * The error appears in JavaScriptError with your custom attrs attached.
     *
     * @param error  The Error object to report.
     * @param attrs  Extra context (component name, user action, etc.)
     */
    noticeError(
      error: Error,
      attrs?: Record<string, string | number | boolean>
    ): void;
  
    /**
     * Set the current page URL reported to New Relic.
     * Useful for SPAs where the URL changes without a full page load.
     */
    setCurrentRouteName(name: string): void;
  
    /**
     * Mark the page as finished loading (useful for SPAs).
     */
    finished(timestamp?: number): void;
  
    /**
     * Add an end-of-session callback.
     * Called just before the session/page unload event fires.
     */
    addToTrace(traceEvent: { name: string; start: number; end?: number; origin?: string; type?: string }): void;
  }
  
  declare global {
    interface Window {
      /**
       * New Relic Browser Agent — injected by the inline snippet in layout.tsx.
       * Always optional — the agent may not have loaded yet, or may be blocked
       * by an ad-blocker. Every call-site must use optional chaining:
       *
       *   window.newrelic?.addPageAction('MyEvent')
       */
      newrelic?: NewRelicBrowserAgent;
  
      /**
       * New Relic internal bootstrap object — set by the snippet before
       * the agent script loads. Do not call methods on this directly.
       */
      NREUM?: Record<string, unknown>;
    }
  }
  
  export {};