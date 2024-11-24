import React from 'react';

export default function ClientHeader({ title, description }) {
  return (
    <div className="flex flex-col w-full pl-20">
      <h1 className="text-5xl text-slate-50 font-bold mt-24">{title}</h1>
      <p className="w-full mx-auto md:mx-0 text-slate-50">{description}</p>
    </div>
  );
}
