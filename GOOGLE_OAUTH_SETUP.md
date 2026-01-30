# Google OAuth Setup Instructions

To enable real Google Sign-In on your StudyZone application, follow these steps:

## 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name (e.g., "StudyZone") and click "Create"

## 2. Enable Google Sign-In API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Identity Services"
3. Click on it and press "Enable"

## 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen first:
   - Choose "External" user type
   - Fill in app name: "StudyZone"
   - Add your email as support email
   - Add authorized domains if you have a custom domain
   - Save and continue through the scopes and test users screens

4. Create OAuth client ID:
   - Application type: "Web application"
   - Name: "StudyZone Web Client"
   - Authorized JavaScript origins:
     - `http://localhost:8000` (for local testing)
     - `http://localhost:8080` (for local testing)
     - Add your production domain when deployed (e.g., `https://yourdomain.com`)
   - Authorized redirect URIs are not needed for the Sign-In flow
   - Click "Create"

5. Copy your Client ID (it will look like: `123456789-abc123.apps.googleusercontent.com`)

## 4. Update Your Code

Replace `YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com` in both files:

**login.html** (around line 313):
```javascript
google.accounts.id.initialize({
  client_id: 'YOUR_ACTUAL_CLIENT_ID_HERE.apps.googleusercontent.com',
  callback: handleGoogleSignIn
});
```

**signup.html** (around line 313):
```javascript
google.accounts.id.initialize({
  client_id: 'YOUR_ACTUAL_CLIENT_ID_HERE.apps.googleusercontent.com',
  callback: handleGoogleSignIn
});
```

## 5. Test Your Integration

1. Start your local server:
   ```bash
   python3 -m http.server 8000
   ```

2. Open `http://localhost:8000/login.html` or `http://localhost:8000/signup.html`

3. Click "Sign in with Google" - you should see the Google account picker popup

4. Select a Google account and grant permissions

5. You'll be redirected to the dashboard upon successful authentication

## Security Notes

- **Never commit your Client ID to public repositories** if it's for a production app
- The Client ID is safe to expose in client-side code for web apps
- For production, make sure to add your actual domain to authorized origins
- Consider implementing CSRF protection for additional security

## Troubleshooting

**"Not a valid origin" error:**
- Make sure you added `http://localhost:8000` to Authorized JavaScript origins

**Popup blocked:**
- Allow popups for your localhost in browser settings

**Invalid Client ID:**
- Double-check you copied the entire Client ID correctly
- Make sure there are no extra spaces

## Current Implementation

The code now:
- ✅ Loads Google Identity Services library
- ✅ Initializes Google Sign-In with your Client ID
- ✅ Opens the real Google login popup when clicked
- ✅ Receives user information (name, email, profile picture)
- ✅ Stores user data in localStorage
- ✅ Creates authenticated session
- ✅ Redirects to dashboard

All you need to do is add your Client ID!
