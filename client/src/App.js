import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing.js";

export default function App() {
  function test(param) {
    console.log(param);
  }

  let login = {
    name: "Login",
    alt: "Register",
    link: "/register",
    formAction: () => test("..."),
  };

  let register = {
    name: "Register",
    alt: "Login",
    link: "/login",
    formAction: () => test("..."),
  };

  const [form, setForm] = useState(login);

  // useEffect(() => {
  //   fetch("http://localhost:5000/getLogin")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setForm({
  //         name: data.name,
  //         alternative: data.alternative,
  //         link: data.link,
  //         formAction: () => test(data.formAction),
  //       })
  //     );
  // }, []);

  return (
    <Landing
      name={form.name}
      formAction={form.formAction}
      alt={form.alt}
      link={form.link}
    />
  );
}
