import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const DISCORD_LOGIN_URI =
  "https://discord.com/oauth2/authorize?client_id=1215837173811642438&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect%2Fdiscord&scope=identify";

type UserPayload = {
  id: string;
  username: string;
  iat: number;
  exp: number;
};

function Account() {
  const [cookies, _, removeCookie] = useCookies(["identity"]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!cookies.identity) {
      setLoggedIn(false);
      return;
    }

    (async () => {
      let authResponse = await axios.get("http://localhost:3000/verify", {
        withCredentials: true,
      });

      if (authResponse.status != 200) {
        removeCookie("identity");
        setLoggedIn(false);
        return;
      }

      setLoggedIn(true);
    })();
  }, [loggedIn]);

  return (
    <>
      {loggedIn ? (
        <div className="flex">
          <p>
            Welcome, {jwtDecode<UserPayload>(cookies.identity).username}!{" "}
            <Link className="success" to="/panel">Control Panel</Link>
            <a className="error" href="http://localhost:3000/logout">
              Log Out
            </a>
          </p>
        </div>
      ) : (
        <a href={DISCORD_LOGIN_URI}>Log In</a>
      )}
    </>
  );
}

export default function NavBar() {
  return (
    <>
      <nav>
        <div>
          <p>Makishima</p>
        </div>
        <div>
          <Account />
        </div>
      </nav>
    </>
  );
}
