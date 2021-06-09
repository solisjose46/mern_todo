import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing.js";

export default function App() {
  const [form, setForm] = useState({ name: "", alt: "" });

  function fetchForm(url) {
    fetch(`/${url}`)
      .then((response) => response.json())
      .then((data) => setForm(data));
  }

  function submitCredentials(name, creds) {
    console.log(creds);
    fetch(`/${name}`, {
      method: "POST",
      body: JSON.stringify(creds),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    fetchForm("login");
  }, []);

  return (
    <Landing
      name={form.name}
      alt={form.alt}
      fetchForm={fetchForm}
      submitCredentials={submitCredentials}
    />
  );
}
