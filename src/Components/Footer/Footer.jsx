import React from "react";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  const sections = [
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Brand Center", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Help center",
      links: [
        { label: "Discord Server", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Licensing", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
    {
      title: "Download",
      links: [
        { label: "iOS", href: "#" },
        { label: "Android", href: "#" },
        { label: "Windows", href: "#" },
        { label: "MacOS", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { href: "#", srLabel: "Facebook page", iconClass: "fa fa-facebook" },
    { href: "#", srLabel: "Discord community", iconClass: "fa fa-discord" },
    { href: "#", srLabel: "Twitter page", iconClass: "fa fa-twitter" },
    { href: "#", srLabel: "GitHub account", iconClass: "fa fa-github" },
    { href: "#", srLabel: "Dribbble account", iconClass: "fa fa-dribbble" },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="px-4 py-6 bg-gray-900 md:flex md:items-center md:justify-between">
          <FooterCopyright />
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            {socialLinks.map((link, index) => (
              <FooterLink
                key={index}
                href={link.href}
                srLabel={link.srLabel}
                iconClass={link.iconClass}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
