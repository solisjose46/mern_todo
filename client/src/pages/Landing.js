import React from "react";

export default function Landing({ name, formAction, alt, link }) {
  return (
    <>
      <div>
        <strong>{name}</strong>
      </div>
      <SignInForm formAction={formAction} alt={alt} link={link} />
    </>
  );
}

function SignInForm({ formAction, alt, link }) {
  return (
    <>
      <form>
        <input placeholder="username" />
        <input placeholder="password" type="password" />
        <button type="button" onClick={formAction}>
          Submit
        </button>
      </form>
      <a href={link}>{alt} instead</a>
    </>
  );
}
