import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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
      return;
    }

    (async () => {
      let authResponse = await axios.get("http://localhost:3000/verify", {
        withCredentials: true,
      });

      if (authResponse.status != 200) {
        removeCookie("identity");
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
            <a className="success">Control Panel</a>
            <a className="error">Log Out</a>
          </p>
        </div>
      ) : (
        <a href="https://discord.com/oauth2/authorize?client_id=1215837173811642438&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect%2Fdiscord&scope=identify">
          Log In
        </a>
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
