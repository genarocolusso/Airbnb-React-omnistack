import React, { useState } from "react";

import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();

    const response = await api.post("/sessions", { email: email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <>
      <p>
        Ofereça <b>spots</b> para programadores e encontre <b>talentos</b> para
        sua empresa
      </p>

      <form onSubmit={handlesubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="seuemail@gmail.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}
