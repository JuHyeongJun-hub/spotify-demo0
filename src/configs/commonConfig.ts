export const SPOTIFY_BASE_URL = process.env.SPOTIFY_BASE_URL;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI; 

if (!SPOTIFY_BASE_URL || !REDIRECT_URI) {
    throw new Error("Spotify base URL or Redirect URI is not configured");
}