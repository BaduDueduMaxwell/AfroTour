// ContactForm.js
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <form className="bg-white shadow-lg p-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Leave A Reply</h2>
      <p>Your email address will not be published. Required fields are marked *</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          className="border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="border p-2 rounded w-full mt-4"
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        name="comment"
        placeholder="Comment"
        className="border p-2 rounded w-full mt-4"
        value={formData.comment}
        onChange={handleChange}
        rows={5}
      ></textarea>
      <button className="bg-orange-500 text-white p-3 rounded mt-4" type="submit">
        Submit
      </button>
    </form>
  );
}
