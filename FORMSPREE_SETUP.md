# Formspree Setup Guide

This guide will help you set up Formspree to receive form submissions from your portfolio contact form.

## What is Formspree?

[Formspree](https://formspree.io/) is a form backend service that makes it easy to receive form submissions via email without writing backend code. It's perfect for static sites and JAMstack applications.

### Free Plan Features
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ File uploads
- ✅ Spam filtering
- ✅ No credit card required

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Sign Up"** (top right)
3. Sign up with your email: `shahfaidrabbani@gmail.com`
4. Verify your email address

### Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. Give it a name: `Portfolio Contact Form`
3. Click **"Create Form"**

### Step 3: Get Your Form Endpoint

You'll see your form endpoint URL:
```
https://formspree.io/f/xyzabc123
```

Copy this URL! You'll need it in the next step.

### Step 4: Add to Your Portfolio

#### Option A: Use Environment Variable (Recommended)

1. Create a `.env.local` file in your portfolio root:
   ```bash
   # In your portfolio directory
   touch .env.local
   ```

2. Add your Formspree endpoint:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
   Replace `YOUR_FORM_ID` with your actual form ID from Step 3.

3. **Important**: Restart your dev server:
   ```bash
   # Press Ctrl+C to stop the server
   npm run dev
   ```

#### Option B: Direct Update (Quick Test)

1. Open `components/Contact.tsx`
2. Find this line (around line 23):
   ```typescript
   const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID"
   ```

3. Replace `YOUR_FORM_ID` with your actual form ID:
   ```typescript
   const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xyzabc123"
   ```

### Step 5: Test Your Form

1. Open your portfolio: [http://localhost:3000](http://localhost:3000)
2. Scroll to the Contact section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click **"Send Message"**
5. You should see a success message! ✅

### Step 6: Check Your Email

1. Go to your email inbox (`shahfaidrabbani@gmail.com`)
2. You should receive an email from Formspree with the test submission
3. The email will include:
   - Name
   - Email address
   - Message

---

## 🎨 Customization Options

### Email Notifications

By default, Formspree sends submissions to the email you signed up with. To customize:

1. Go to your form settings on Formspree
2. Navigate to **"Email Settings"**
3. You can:
   - Change notification email
   - Customize email subject
   - Add CC/BCC recipients
   - Set up auto-reply messages

### Spam Protection

Formspree includes built-in spam filtering, but you can enhance it:

1. In form settings, enable **"reCAPTCHA"**
2. Add honeypot fields (already included in the code)
3. Set up custom spam filters

### Custom Success/Error Messages

Already implemented in `components/Contact.tsx`:
- ✅ Success message with animation
- ✅ Error handling with user feedback
- ✅ Loading state while submitting
- ✅ Form resets after successful submission

---

## 🌐 Deployment

### For Vercel

1. Go to your Vercel project settings
2. Navigate to **"Environment Variables"**
3. Add:
   - Key: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/YOUR_FORM_ID`
4. Redeploy your site

### For Other Platforms

Add the environment variable in your platform's settings:
- **Netlify**: Site Settings → Environment Variables
- **Railway**: Project Settings → Variables
- **Render**: Environment → Environment Variables

---

## 📊 Viewing Submissions

### Formspree Dashboard

1. Log in to [Formspree](https://formspree.io/)
2. Click on your **"Portfolio Contact Form"**
3. View all submissions in the dashboard
4. Export submissions to CSV
5. Archive or delete old submissions

### Email Inbox

All submissions are automatically sent to your email, so you don't need to check the Formspree dashboard constantly.

---

## 🔧 Troubleshooting

### "Failed to send message"

**Possible causes:**
1. **Invalid Form ID**: Double-check your Formspree endpoint URL
2. **Environment variable not loaded**: Restart your dev server
3. **Network issue**: Check your internet connection
4. **CORS issue**: Make sure you're using the correct Formspree endpoint

**Solutions:**
```bash
# Restart dev server
npm run dev

# Check environment variable
echo $NEXT_PUBLIC_FORMSPREE_ENDPOINT  # Mac/Linux
$env:NEXT_PUBLIC_FORMSPREE_ENDPOINT   # Windows PowerShell
```

### Form submits but no email received

1. **Check spam folder** in your email
2. **Verify email** in Formspree account settings
3. **Check Formspree dashboard** for submissions
4. **Email settings** might need to be configured

### Form endpoint returns 404

- Your form ID is incorrect
- Copy the exact endpoint from Formspree dashboard
- Make sure there are no extra spaces or typos

---

## 🎯 Testing Checklist

Before deploying:

- [ ] Form submits successfully
- [ ] Success message appears
- [ ] Email notification received
- [ ] Form clears after submission
- [ ] Error handling works (test with invalid endpoint)
- [ ] Loading state shows while submitting
- [ ] Works on mobile devices
- [ ] Environment variable set in production

---

## 💰 Upgrading Formspree

If you receive more than 50 submissions per month:

### Paid Plans

| Plan | Price | Submissions |
|------|-------|-------------|
| **Basic** | $10/month | 1,000/month |
| **Pro** | $40/month | 10,000/month |
| **Business** | Custom | Unlimited |

### Alternative Solutions

If you need more than 50 submissions without paying:

1. **EmailJS** - Similar to Formspree
2. **GetForm** - Free tier with 50 submissions
3. **FormSubmit** - Completely free
4. **Custom Backend** - Build your own with Node.js/Express

---

## 🔐 Security Best Practices

1. **Never commit `.env.local`** to Git (already in `.gitignore`)
2. **Use environment variables** for sensitive data
3. **Enable reCAPTCHA** on Formspree for spam protection
4. **Rate limiting** is handled by Formspree automatically
5. **Sanitize inputs** (Formspree does this automatically)

---

## 📞 Support

### Formspree Support
- **Documentation**: [https://help.formspree.io/](https://help.formspree.io/)
- **Email**: support@formspree.io
- **Response Time**: Usually within 24 hours

### Portfolio Support
- Check the main README.md
- Review SETUP.md for general configuration
- Contact: shahfaidrabbani@gmail.com

---

## ✨ What's Next?

After setting up Formspree:

1. ✅ Test the form thoroughly
2. ✅ Set up email notifications
3. ✅ Add auto-reply messages (optional)
4. ✅ Deploy to production
5. ✅ Monitor submissions in Formspree dashboard

---

**Setup Complete!** 🎉

Your contact form is now fully functional and ready to receive messages!

**Quick Links:**
- [Formspree Dashboard](https://formspree.io/forms)
- [Formspree Documentation](https://help.formspree.io/)
- [Your Portfolio](http://localhost:3000)

---

Built with ❤️ for Shahfaid Rabbani's Portfolio

