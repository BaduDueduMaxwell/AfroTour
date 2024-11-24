import React from "react";
import ClientHeader from "./ClientHeader";
import SignIn from "../Auth/SignIn";

export default function ClientArea() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center bg-sky-700">
        <ClientHeader
          title="Client Area"
          description="Control and monitor your website data from the dashboard."
        />
        <div className="flex flex-col w-full">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
