import React from 'react';

export default function FooterLink({ href, srLabel, iconClass }) {
  return (
    <a href={href} className="text-slate-50 hover:text-black dark:hover:text-slate-50">
      <span className="sr-only">{srLabel}</span>
      <i className={iconClass}></i> {/* You can replace this with actual icons */}
    </a>
  );
}
