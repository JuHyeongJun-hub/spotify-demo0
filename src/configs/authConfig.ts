export const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_SECRET_ID;
export const CLIENT_ID     = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Spotify credentials are not properly configured. Please check your environment variables.');
}