# ⚡ Deploy to Cloudflare Pages - Quick Start

## **Current Status**
✅ Code pushed to GitHub  
✅ Build tested locally  
✅ All configurations ready  
⏳ **Waiting for Cloudflare deployment**

---

## **🚀 Deploy in 5 Minutes**

### **Step 1: Go to Cloudflare Pages**
1. Open: https://dash.cloudflare.com/pages
2. Sign in (or create free account)
3. Click **"Create a project"**

### **Step 2: Connect GitHub**
1. Click **"Connect to Git"**
2. Authorize Cloudflare to access GitHub
3. Select repository: **`stellarglobalsupplies-website`**
   - Note: Repository is now at: https://github.com/Stellar-Global-Supplies/stellarglobalsupplies-website

### **Step 3: Configure Build Settings**

**Fill in these exact values:**

```
Production branch: main

Build command: npm run build

Build output directory: .next

Node.js version: 18.x (or 20.x)
```

**Environment Variables:**
Click "Add variable" and add:
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://stellarglobalsupplies.com
```

### **Step 4: Deploy**
1. Click **"Save and Deploy"**
2. Wait 2-3 minutes
3. Your site will be live at: `https://stellar-global-supplies.pages.dev`

---

## **✅ After First Deployment**

### **Add Custom Domain**

1. In Cloudflare Pages dashboard, go to your project
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Add: `stellarglobalsupplies.com`
5. Add: `www.stellarglobalsupplies.com`

### **Update DNS at Your Domain Registrar**

**Option A: Use Cloudflare Nameservers (Recommended)**
- Log in to your domain registrar (where you bought the domain)
- Update nameservers to:
  - `ns1.cloudflare.com`
  - `ns2.cloudflare.com`
- This gives you full Cloudflare features (WAF, DDoS protection)

**Option B: Keep Current Nameservers**
- Add A record: `@` → `76.76.21.21`
- Add CNAME record: `www` → `stellar-global-supplies.pages.dev`

### **Enable Auto-Deploy**

1. Go to Project Settings → Git
2. Enable **"Auto-deploy on push to main"**
3. Enable **"Preview deployments"** for PRs

---

## **🔍 Verify Deployment**

After deployment, test these URLs:

1. **Cloudflare Pages URL:**
   - https://stellar-global-supplies.pages.dev
   - (This will be your actual project name)

2. **Custom Domain (after DNS propagation):**
   - https://stellarglobalsupplies.com
   - https://www.stellarglobalsupplies.com

3. **Test Pages:**
   - Homepage: https://stellarglobalsupplies.com/
   - Promotional Products: https://stellarglobalsupplies.com/promotional-products
   - Blog: https://stellarglobalsupplies.com/blog

---

## **📋 Troubleshooting**

### **Build Fails**

**Check build logs in Cloudflare Pages:**
1. Go to your project
2. Click "Deployments"
3. Click on failed deployment
4. Check error logs

**Common fixes:**
- Ensure Node.js version is 18.x or 20.x
- Verify build command: `npm run build`
- Verify output directory: `.next`
- Check environment variable is set: `NEXT_PUBLIC_SITE_URL`

### **404 Error After Deployment**

**Solution:**
- Wait 2-3 minutes for deployment to complete
- Clear browser cache
- Try incognito mode
- Check deployment status in Cloudflare dashboard

### **Images Not Loading**

**Solution:**
- Verify `_redirects` file is in `public/` folder
- Check image paths are correct
- Ensure images are in `public/img/` directory

### **SSL Certificate Not Working**

**Solution:**
- Wait 5-10 minutes for SSL provisioning
- Ensure "Always Use HTTPS" is enabled in Cloudflare
- Check DNS propagation: https://dnschecker.org

---

## **🎯 Quick Checklist**

- [ ] Sign up for Cloudflare
- [ ] Create Pages project
- [ ] Connect GitHub repository
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `.next`
- [ ] Add environment variable: `NEXT_PUBLIC_SITE_URL`
- [ ] Click "Save and Deploy"
- [ ] Wait for deployment to complete
- [ ] Add custom domain
- [ ] Update DNS settings
- [ ] Test all pages
- [ ] Enable auto-deploy

---

## **📞 Need Help?**

**Cloudflare Documentation:**
- https://developers.cloudflare.com/pages/
- https://developers.cloudflare.com/pages/framework-guides/nextjs/

**Common Issues:**
- Build fails: Check Node.js version (use 18.x or 20.x)
- 404 error: Wait for deployment to complete
- Images not loading: Check `_redirects` file exists
- SSL issues: Wait 5-10 minutes for provisioning

---

## **⏱️ Expected Timeline**

1. **Sign up & create project:** 5 minutes
2. **First deployment:** 2-3 minutes
3. **DNS propagation:** 5-30 minutes
4. **SSL provisioning:** 5-10 minutes
5. **Total time:** ~15-45 minutes

---

**Your code is ready! Just follow the steps above to deploy to Cloudflare Pages.** 🚀