import React from "react";
import Main from "./pages/Main.js";
import Landing from "./pages/Landing.js";

export default function App() {
  function test() {
    console.log("gt");
  }

  const login = {
    name: "Login",
    formAction: test,
    alternative: "Register",
    link: "",
  };
  const register = {
    name: "Register",
    formAction: test,
    alternative: "Login",
    link: "",
  };
  return (
    <Landing
      name={register.name}
      formAction={register.formAction}
      alternative={register.alternative}
      link={register.link}
    />
  );
}
