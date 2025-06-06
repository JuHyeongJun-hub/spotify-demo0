export const clientSecret = process.env.REACT_APP_SPOTIFY_SECRET_ID;
export const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

if (!clientId || !clientSecret) {
  console.error('Spotify credentials are not properly configured. Please check your environment variables.');
}