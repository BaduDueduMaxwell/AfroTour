import React from "react";
import Input from "./Input";
import Button from "../Hero/HeroButton.jsx";

export default function Form() {
  return (
    <form action="" className="w-full">
      <Input
        label="Username"
        type="text"
        id="username"
        placeholder="Please insert your username"
      />
      <Input
        label="Password"
        type="password"
        id="password"
        placeholder="Please insert your password"
      />
      <div className="text-left mt-4">
        <Button text="Sign in" />
      </div>
    </form>
  );
}
