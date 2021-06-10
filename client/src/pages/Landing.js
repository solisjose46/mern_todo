import React, { useState, useRef } from "react";

export default function Landing() {
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
    if (obj === login) {
      setForm(register);
    } else {
      setForm(login);
    }
  }

  function submitCredentials(creds) {
    fetch(`/${form.name}`, {
      method: "POST",
      body: JSON.stringify(creds),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  return (
    <>
      <div>
        <strong>{form.name}</strong>
      </div>
      <SignInForm
        alt={form.alt}
        submitCredentials={submitCredentials}
        changeForm={changeForm}
      />
    </>
  );
}

function SignInForm({ alt, submitCredentials, changeForm }) {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  let currentForm = {
    username: usernameRef.current.value,
    password: passwordRef.current.value,
  };
  function returnCredentials() {
    submitCredentials(currentForm);
  }
  return (
    <>
      <form>
        <input placeholder="username" autoComplete="off" />
        <input placeholder="password" type="password" autoComplete="off" />
        <button type="button" onClick={returnCredentials()}>
          Submit
        </button>
      </form>
      <button type="button" onClick={changeForm(currentForm)}>
        {alt} instead
      </button>
    </>
  );
}
