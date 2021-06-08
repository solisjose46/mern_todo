import React from "react";

export default function Landing({ name, formAction, alternative, link }) {
  return (
    <>
      <div>
        <strong>{name}</strong>
      </div>
      <SignInForm
        formAction={formAction}
        alternative={alternative}
        link={link}
      />
    </>
  );
}

function SignInForm({ formAction, alternative, link }) {
  return (
    <>
      <form onSubmit={formAction}>
        <input placeholder="username" />
        <input placeholder="password" type="password" />
        <button type="submit">Submit</button>
      </form>
      <a href={link}>{alternative} instead</a>
    </>
  );
}
