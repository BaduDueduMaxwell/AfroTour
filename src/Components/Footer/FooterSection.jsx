import React from "react";

export default function FooterSection({ title, links }) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase text-sky-400">
        {title}
      </h2>
      <ul className="text-slate-50 font-medium">
        {links.map((link, index) => (
          <li key={index} className="mb-4">
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
