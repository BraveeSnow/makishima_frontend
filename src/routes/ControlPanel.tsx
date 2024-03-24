const ANILIST_AUTH_URI = "https://anilist.co/api/v2/oauth/authorize?client_id=5175&redirect_uri=http://localhost:3000/redirect/anilist&response_type=code";

export default function ControlPanel() {
  return (
    <>
      <h1>Control Panel</h1>
      <a href={ANILIST_AUTH_URI}>Connect Anilist</a>
    </>
  );
}
