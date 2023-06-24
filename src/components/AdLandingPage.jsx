import React from "react";
import { Helmet } from "react-helmet";

const LandingPage = () => {
    return (
        <div className="font-sans min-h-screen antialiased py-6 flex flex-col justify-center sm:py-12 bg-gray-100">
            <Helmet>
                <title>Professional House Cleaning Services in Fresno, Madera, and Clovis, CA | Home Sparkle Pros</title>
                <meta name="description" content="Reliable, affordable, and efficient home cleaning services in Fresno, Madera, and Clovis, CA. Get your free quote today!" />
            </Helmet>

            {/* Intro Section */}
            <section className="p-10 bg-white text-center">
                <h1 className="text-4xl mb-4">Welcome to Our Cleaning Service</h1>
                <p className="text-xl mb-8">Quality cleaning for your home</p>
                <img src="/your-image.jpg" alt="Hero image" className="mx-auto w-1/2 mb-8"/>
                <a href="#contact" className="px-4 py-2 bg-blue-500 text-white rounded">Get a free quote</a>
            </section>

            {/* Features Section */}
            <section className="p-10 bg-white">
                <h2 className="text-3xl mb-4">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <img src="/your-feature-image.jpg" alt="Feature 1" />
                        <h3 className="text-xl mt-4 mb-2">Feature 1</h3>
                        <p>Description of Feature 1</p>
                    </div>
                    {/* More features here */}
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="p-10 bg-white">
                <h2 className="text-3xl mb-4">Get a Free Quote</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="p-2 border rounded" type="text" placeholder="Your Name" />
                    <input className="p-2 border rounded" type="email" placeholder="Your Email" />
                    <textarea className="p-2 border rounded col-span-full" placeholder="Your Message"></textarea>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded col-span-full md:col-span-1">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default LandingPage;
