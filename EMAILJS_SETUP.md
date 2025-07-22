# EmailJS Setup Instructions

Your contact form is now ready to use EmailJS! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your Gmail account
5. Note down the **Service ID** (something like 'service_xxxxxxx')

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Save the template and note down the **Template ID** (something like 'template_xxxxxxx')

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (something like 'xxxxxxxxxxxxxxx')

## Step 5: Update Your Code
In your Contact.jsx file, replace these placeholders with your actual values:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID  
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test Your Form
1. Start your React app: `npm start`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email for the message!

## Email Template Variables Used:
- `{{from_name}}` - The sender's name from the form
- `{{from_email}}` - The sender's email from the form
- `{{message}}` - The message content from the form
- `{{to_name}}` - Set to "Teja Chennapragada" in the code

## Features Added:
✅ Form validation
✅ Loading states while sending
✅ Success/error notifications
✅ Automatic form reset on success
✅ Professional email templates
✅ No backend required!

## Free Tier Limits:
- 200 emails per month
- Perfect for a portfolio website

## Troubleshooting:
- Make sure all IDs are correctly copied
- Check browser console for any errors
- Verify your email service is properly connected
- Test with a simple message first

Once configured, visitors can send you messages directly through your portfolio!
