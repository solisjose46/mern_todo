import React, { useState } from "react";
import Main from "./pages/Main.js";
import Landing from "./pages/Landing.js";

export default function App() {
  const [auth, setAuth] = useState(false);

  function submitCredentials(creds, name) {
    console.log("submitCredentials");
    console.log(creds);
    fetch(`/${name}`, {
      method: "POST",
      body: JSON.stringify(creds),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(console.log("complete"))
      .then(setAuth(true));
  }

  function AuthenticateRedirect() {
    return auth ? (
      <Main setAuth={setAuth} />
    ) : (
      <Landing submitCredentials={submitCredentials} />
    );
  }

  return <AuthenticateRedirect />;
}
