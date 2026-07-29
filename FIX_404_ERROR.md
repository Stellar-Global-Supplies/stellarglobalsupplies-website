# 🔧 Fix 404 Error on Cloudflare Pages

## **Problem**
You're getting a 404 error at `https://stellarglobalsupplies-website.pages.dev`

## **Root Cause**
The 404 error usually means one of these issues:
1. Build hasn't completed yet
2. Build output directory is incorrect
3. Build failed silently
4. Need to trigger a new deployment after our latest changes

---

## **✅ Solution: Trigger a New Deployment**

### **Step 1: Check Current Deployment Status**

1. Go to: https://dash.cloudflare.com/pages
2. Click on your project: `stellarglobalsupplies-website`
3. Check the **"Deployments"** tab
4. Look at the latest deployment:
   - Is it **"Success"** or **"Failed"**?
   - What time was it deployed?
   - Check the build logs for errors

---

### **Step 2: Trigger a New Deployment**

**Option A: Push a Small Change (Recommended)**

1. Make a small change to trigger a new deployment:
   ```bash
   git commit --allow-empty -m "chore: trigger new deployment"
   git push origin main
   ```

2. Wait 2-3 minutes for Cloudflare to build and deploy

**Option B: Manual Retry in Cloudflare Dashboard**

1. Go to your project in Cloudflare Pages
2. Click **"Deployments"** tab
3. Find the latest failed/old deployment
4. Click **"..."** → **"Retry deployment"**

---

### **Step 3: Verify Build Settings**

In Cloudflare Pages dashboard, go to **Settings → Build & deployments**:

**Verify these settings:**

```
Production branch: main
Build command: npm run build
Build output directory: .next
Node.js version: 18.x (or 20.x)
```

**⚠️ CRITICAL: Build output directory must be `.next`** (not `out`, not `public`)

---

### **Step 4: Check Build Logs**

If the build fails:

1. Go to **Deployments** tab
2. Click on the failed deployment
3. Check the **"Build log"** section
4. Look for error messages

**Common errors and fixes:**

#### **Error: "Build command not found"**
```
Fix: Ensure build command is: npm run build
```

#### **Error: "Output directory not found"**
```
Fix: Set build output to: .next
```

#### **Error: "Node.js version not supported"**
```
Fix: Use Node.js 18.x or 20.x
```

#### **Error: "Module not found"**
```
Fix: Check that all dependencies are in package.json
```

---

### **Step 5: Verify Environment Variables**

1. Go to **Settings → Environment variables**
2. Ensure this variable exists:
   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://stellarglobalsupplies.com
   ```
3. Make sure it's available for **Production** environment

---

### **Step 6: Clear Cache and Test**

After successful deployment:

1. **Clear Cloudflare Cache:**
   - Go to your project
   - Click **"Settings"** → **"Functions"** → **"Clear cache"**
   - Or use: https://support.cloudflare.com/hc/en-us/articles/200169246

2. **Test the site:**
   - Visit: https://stellar-global-supplies.pages.dev
   - Try incognito mode
   - Clear browser cache
   - Wait 2-3 minutes for propagation

---

## **🔍 Detailed Troubleshooting**

### **Issue: 404 on all pages**

**Cause:** Build output directory is wrong

**Solution:**
1. Go to Cloudflare Pages → Settings
2. Set **Build output directory** to: `.next`
3. Trigger new deployment

### **Issue: 404 on specific pages**

**Cause:** Pages not generated during build

**Solution:**
1. Check build logs for errors
2. Ensure all pages are in `app/` directory
3. Verify no build errors in console

### **Issue: 404 after custom domain setup**

**Cause:** DNS not propagated yet

**Solution:**
1. Wait 5-30 minutes for DNS propagation
2. Check DNS: https://dnschecker.org
3. Verify domain is added in Cloudflare Pages

### **Issue: Works on pages.dev but not on custom domain**

**Cause:** DNS or SSL issue

**Solution:**
1. Check DNS records are correct
2. Wait for SSL certificate provisioning (5-10 minutes)
3. Enable "Always Use HTTPS" in Cloudflare

---

## **🚀 Quick Fix Checklist**

- [ ] Check deployment status in Cloudflare dashboard
- [ ] Verify build settings (output: `.next`)
- [ ] Check build logs for errors
- [ ] Verify environment variables are set
- [ ] Trigger new deployment (push empty commit)
- [ ] Wait 2-3 minutes for deployment
- [ ] Clear browser cache
- [ ] Test in incognito mode
- [ ] Check DNS propagation (if using custom domain)

---

## **📋 Expected Behavior After Fix**

✅ Deployment status: **"Success"**  
✅ Build log shows: **"Build completed"**  
✅ Site loads at: `https://stellar-global-supplies.pages.dev`  
✅ All pages work: `/`, `/promotional-products`, `/blog`  
✅ Images load correctly  
✅ SSL certificate active (HTTPS)  

---

## **🆘 Still Getting 404?**

### **Check These:**

1. **Is the deployment actually successful?**
   - Look for green checkmark in Cloudflare dashboard
   - Check deployment timestamp

2. **Are you visiting the correct URL?**
   - Your project name might be different
   - Check: Cloudflare Pages → Settings → Domains

3. **Is the build output correct?**
   - Must be `.next` (not `out`, not `public`)
   - Must contain `server/` and `static/` folders

4. **Are there any build errors?**
   - Check deployment logs carefully
   - Look for red error messages

### **Last Resort: Recreate Project**

If nothing works:

1. Delete the Cloudflare Pages project
2. Create a new project
3. Reconnect GitHub
4. Reconfigure build settings
5. Deploy again

---

## **📞 Get Help**

**Cloudflare Support:**
- Dashboard → Help → Contact Support
- Community: https://community.cloudflare.com

**Check Status:**
- Cloudflare Status: https://www.cloudflarestatus.com
- GitHub Issues: https://github.com/Stellar-Global-Supplies/stellarglobalsupplies-website/issues

---

**Most likely fix: Trigger a new deployment by pushing an empty commit!**