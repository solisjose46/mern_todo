import React, { useState } from "react";

export default function Landing({ submitCredentials }) {
  let login = {
    name: "login",
    alt: "register",
  };

  let register = {
    name: "register",
    alt: "login",
  };
  const [form, setForm] = useState(login);

  function changeForm(obj) {
    console.log("changeForm");
    if (obj === login.name) {
      setForm(login);
    } else {
      setForm(register);
    }
  }

  return (
    <>
      <div>
        <strong>{form.name}</strong>
      </div>
      <SignInForm
        name={form.name}
        alt={form.alt}
        submitCredentials={submitCredentials}
        changeForm={changeForm}
      />
    </>
  );
}

function SignInForm({ name, alt, submitCredentials, changeForm }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const currentForm = {
    username: user,
    password: pass,
  };

  return (
    <>
      <form>
        <input
          placeholder="username"
          type="us"
          autoComplete="off"
          value={user}
          onInput={(e) => setUser(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          autoComplete="off"
          value={pass}
          onInput={(e) => setPass(e.target.value)}
        />
        <button
          type="button"
          onClick={() => submitCredentials(currentForm, name)}
        >
          Submit
        </button>
      </form>
      <button type="button" onClick={() => changeForm(alt)}>
        {alt} instead
      </button>
    </>
  );
}
