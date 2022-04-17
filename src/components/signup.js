import React, { useRef, useState } from "react";
import { useUserContext } from "../userContext";
import Toggle from "./toggle";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const [value, setValue] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value + ";" + (value ? "Brand" : "User");
    console.log(name);
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2>Create an Account with Plutus</h2>
      <form onSubmit={onSubmit}>
        <input placeholder={value ? "Brand Name" : "User Name"} type="name" ref={nameRef} />
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <Toggle
        isOn={value}
        handleToggle={() => setValue(!value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;