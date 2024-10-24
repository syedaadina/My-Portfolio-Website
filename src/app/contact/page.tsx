"use client";



import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // Replace with your form submission logic
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
        setTimeout(() => {
            setSubmitted(false);
        }, 12000); // Message disappears after 12 seconds
    };

    return (
        <section id="contact" className="py-12 px-4 bg-gradient-to-r from-orange-400 to-gray-950">
            <h2 className="text-3xl font-extrabold text-center mb-6 font-serif text-white">Contact Me</h2>

            {submitted && (
                <p className="text-green-500 text-center mb-4">Your message has been sent!</p>
            )}

            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-black">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="text-black w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-600"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="text-black w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-600"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-black">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="text-black w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-600"
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-gray-700 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default Contact;
