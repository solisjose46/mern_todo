import React, { useState, useRef } from "react";

export default function Landing({ name, alt, fetchForm, submitCredentials }) {
  return (
    <>
      <div>
        <strong>{name}</strong>
      </div>
      <SignInForm
        name={name}
        alt={alt}
        fetchForm={fetchForm}
        submitCredentials={submitCredentials}
      />
    </>
  );
}

function SignInForm({ name, alt, fetchForm, submitCredentials }) {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [creds, setCreds] = useState({
    username: usernameRef.current.value,
    password: passwordRef.current.value,
  });

  function send() {
    console.log({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
    setCreds({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
    submitCredentials(name, creds);
  }

  return (
    <>
      <form>
        <input placeholder="username" autoComplete="off" ref={usernameRef} />
        <input
          placeholder="password"
          type="password"
          autoComplete="off"
          ref={passwordRef}
        />
        <button type="button" onClick={() => send()}>
          Submit
        </button>
      </form>
      <button type="button" onClick={() => fetchForm(alt)}>
        {alt} instead
      </button>
    </>
  );
}
