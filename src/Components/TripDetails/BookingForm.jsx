import React from "react";

export default function BookingForm({
  price,
  onSubmit,
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  checkInPlaceholder,
  checkOutPlaceholder,
}) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">From GH₵ {price}</h2>
      <button className="text-orange-500 underline mb-6">
        Customize request
      </button>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">
            Name *
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            placeholder={namePlaceholder}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            placeholder={emailPlaceholder}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium">
            Phone *
          </label>
          <input
            type="text"
            id="phone"
            className="w-full p-2 border rounded"
            placeholder={phonePlaceholder}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkin" className="block text-lg font-medium">
            Check in *
          </label>
          <input
            type="date"
            id="checkin"
            className="w-full p-2 border rounded"
            placeholder={checkInPlaceholder}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkout" className="block text-lg font-medium">
            Check out *
          </label>
          <input
            type="date"
            id="checkout"
            className="w-full p-2 border rounded"
            placeholder={checkOutPlaceholder}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block text-lg font-medium">
            Guests *
          </label>
          <input
            type="number"
            id="guests"
            className="w-full p-2 border rounded"
            min="1"
            defaultValue="1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="extraInfo" className="block text-lg font-medium">
            Extra Information
          </label>
          <textarea
            id="extraInfo"
            className="w-full p-2 border rounded"
            placeholder="Any special requests or information?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded-md"
        >
          Send Now
        </button>
      </form>
    </div>
  );
}
