// NewsletterSubscription.js
import React, { useState } from 'react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(email);
    // Handle subscription logic
  };

  return (
    <div className="bg-sky-700 flex justify-center items-center p-8 rounded-lg">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold mb-4">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-white mb-4">
          And Get Our Company Updates And Early Deals.
        </p>
        <form className="flex items-center" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg border-none outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white p-2 rounded-r-lg"
            type="submit"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}
