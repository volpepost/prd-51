// Environment configuration for dynamic URI handling
export const getEnvironmentConfig = () => {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  
  // Detect environment type
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  const isLovableApp = hostname.includes('.lovable.app');
  const isProduction = !isLocalhost && !isLovableApp;
  
  return {
    currentOrigin,
    hostname,
    isLocalhost,
    isLovableApp,
    isProduction,
    redirectUri: `${currentOrigin}`,
    environment: isLocalhost ? 'development' : isLovableApp ? 'staging' : 'production'
  };
};

// Google OAuth configuration
export const getGoogleOAuthConfig = () => {
  const env = getEnvironmentConfig();
  
  return {
    clientId: '363635642550-hbmv3slgepk1pehgp8nje3tb4af0mvj0.apps.googleusercontent.com',
    apiKey: 'AIzaSyA838Rx52FU8EIPO5_mETnpyddNZyFhzGU',
    redirectUri: env.redirectUri,
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
    discoveryDoc: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  };
};

// Console helper for debugging
export const logEnvironmentInfo = () => {
  const env = getEnvironmentConfig();
  const oauth = getGoogleOAuthConfig();
  
  console.group('🔧 Environment Configuration');
  console.log('Environment:', env.environment);
  console.log('Current Origin:', env.currentOrigin);
  console.log('Hostname:', env.hostname);
  console.log('Redirect URI:', oauth.redirectUri);
  console.groupEnd();
};