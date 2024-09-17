// About.js
import React from "react";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm";
import NewsletterSubscription from "./NewsletterSubscription";
import { CarouselCustomArrows } from "../TripDetails/CarouselCustomArrows";

export default function About() {
  return (
    <div className="container mx-auto p-8 mt-14">
      <CarouselCustomArrows />
      <ContactSection />
      <div className="my-8">
        <ContactForm />
      </div>
      <div className="my-8">
        <NewsletterSubscription />
      </div>
    </div>
  );
}
