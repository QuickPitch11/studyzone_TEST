# Apple Sign In Setup Instructions

To enable real Apple Sign In on your StudyZone application, follow these steps:

## 1. Create an Apple Developer Account

1. Go to [Apple Developer](https://developer.apple.com/)
2. Enroll in the Apple Developer Program ($99/year)
3. Sign in to your Apple Developer account

## 2. Register Your App ID

1. Go to [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/)
2. Click on "Identifiers" in the sidebar
3. Click the "+" button to create a new identifier
4. Select "App IDs" and click "Continue"
5. Select "App" and click "Continue"
6. Fill in the details:
   - **Description:** StudyZone Web App
   - **Bundle ID:** `com.studyzone.web` (or your preferred reverse domain)
   - Check "Sign in with Apple" capability
7. Click "Continue" and then "Register"

## 3. Create a Services ID

1. Go back to "Identifiers"
2. Click the "+" button again
3. Select "Services IDs" and click "Continue"
4. Fill in the details:
   - **Description:** StudyZone Web Service
   - **Identifier:** `com.studyzone.web` (same as your App ID)
5. Check "Sign in with Apple"
6. Click "Configure" next to "Sign in with Apple"
7. In the configuration:
   - **Primary App ID:** Select the App ID you created in step 2
   - **Web Domain:** Add your domain (e.g., `yourdomain.com`)
     - For local testing: You cannot use `localhost` directly with Apple
     - You'll need to use a tunneling service like ngrok for local testing
   - **Return URLs:** Add authorized redirect URIs:
     - For production: `https://yourdomain.com/login.html`
     - For production: `https://yourdomain.com/signup.html`
8. Click "Save" and then "Continue"
9. Click "Register"

## 4. Set Up for Local Testing (Optional)

Since Apple doesn't allow localhost, you need to use a tunneling service:

1. Install ngrok:
   ```bash
   brew install ngrok
   # or download from https://ngrok.com/
   ```

2. Start your local server:
   ```bash
   python3 -m http.server 8000
   ```

3. In a new terminal, start ngrok:
   ```bash
   ngrok http 8000
   ```

4. ngrok will provide a public URL like `https://abc123.ngrok.io`

5. Add this URL to your Apple Services ID configuration:
   - Web Domain: `abc123.ngrok.io`
   - Return URLs: 
     - `https://abc123.ngrok.io/login.html`
     - `https://abc123.ngrok.io/signup.html`

6. Access your site via the ngrok URL instead of localhost

## 5. Update Your Code

The Client ID (`com.studyzone.web`) is already in the code. If you used a different Bundle ID, update it in both files:

**login.html** (around line 387):
```javascript
AppleID.auth.init({
  clientId: 'com.studyzone.web', // Replace with your Services ID
  scope: 'name email',
  redirectURI: window.location.origin + '/login.html',
  usePopup: true
});
```

**signup.html** (around line 384):
```javascript
AppleID.auth.init({
  clientId: 'com.studyzone.web', // Replace with your Services ID
  scope: 'name email',
  redirectURI: window.location.origin + '/signup.html',
  usePopup: true
});
```

## 6. Test Your Integration

1. Using ngrok (for local testing):
   ```bash
   # Terminal 1
   python3 -m http.server 8000
   
   # Terminal 2
   ngrok http 8000
   ```

2. Open the ngrok URL in your browser (e.g., `https://abc123.ngrok.io/login.html`)

3. Click "Sign in with Apple" - you should see the Apple Sign In popup

4. Sign in with your Apple ID

5. You'll be redirected to the dashboard upon successful authentication

## Important Notes About Apple Sign In

**Email Privacy:**
- Users can choose to "Hide My Email" which creates a private relay email
- The email will look like: `abc123@privaterelay.appleid.com`
- Apple forwards emails sent to this address to the user's real email

**User Information:**
- Name and email are only provided on the **first sign-in**
- Subsequent sign-ins only provide the Apple ID token
- Store user information in your database after first sign-in

**Production Requirements:**
- Must use HTTPS (Apple doesn't support HTTP)
- Cannot use localhost directly
- Must have a registered domain
- Must verify domain ownership in Apple Developer Portal

## Security Best Practices

- Keep your Services ID confidential in production
- Implement server-side token verification for production apps
- Use Apple's token validation endpoints to verify authenticity
- Store the Apple ID token securely if needed for later API calls

## Troubleshooting

**"Invalid client" error:**
- Check that your Services ID matches exactly
- Verify domain is registered in Apple Developer Portal
- Make sure redirect URIs match exactly

**"Not a valid redirect URI" error:**
- Ensure the redirect URI is registered in your Services ID configuration
- Check that you're using HTTPS (not HTTP) in production

**Popup blocked:**
- Allow popups for your domain in browser settings
- Make sure `usePopup: true` is set in the init config

**Name/email not provided:**
- This is normal after the first sign-in
- Apple only provides this data on initial authorization
- Store it in localStorage/database on first login

## Current Implementation

The code now:
- ✅ Loads Apple Sign In JS library
- ✅ Initializes Apple Sign In with your Services ID
- ✅ Opens the real Apple Sign In popup when clicked
- ✅ Receives user information (name, email)
- ✅ Handles "Hide My Email" private relay addresses
- ✅ Stores user data in localStorage
- ✅ Creates authenticated session
- ✅ Redirects to dashboard

For production deployment, make sure to:
1. Register your domain with Apple
2. Add your production URLs to the Services ID configuration
3. Use HTTPS
4. Test thoroughly with different Apple ID privacy settings
