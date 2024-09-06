import React from 'react';
import ClientHeader from './ClientHeader';
import Form from './Form';
import Links from './Links';

export default function ClientArea() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center dark:bg-sky-700">
        <ClientHeader
          title="Client Area"
          description="Control and monitor your website data from the dashboard."
        />
        <div className="w-full md:w-full mx-0 lg:w-9/12 pl-20 pr-20">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
              Sign in
            </h2>
            <Form />
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
