import React from 'react';
import { Mail, Linkedin, Clock, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="font-medium text-slate-700">Email</p>
                  <a href="mailto:zhiwen555@gmail.com" className="text-indigo-600 hover:text-indigo-700">
                    zhiwen555@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="font-medium text-slate-700">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/zhiwenhuang0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    linkedin.com/in/zhiwenhuang0
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <form method="POST" className="space-y-4" action="https://formspree.io/f/manyzeag">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-slate-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-slate-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-slate-900"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// <form method="POST" className="space-y-4" action="https://formspree.io/f/manyzeag">

// <div className="flex items-center gap-3">
//   <Clock className="w-5 h-5 text-indigo-600" />
//   <div>
//     <p className="font-medium text-slate-700">Response Time</p>
//     <p className="text-slate-600">Within 24 hours</p>
//   </div>
// </div>

// <div className="flex items-center gap-3">
//   <Clock className="w-5 h-5 text-indigo-600" />
//   <div>
//     <p className="font-medium">Response Time</p>
//     <p className="text-gray-600">Within 24 hours</p>
//   </div>
// </div>

// <div className="flex items-center gap-3">
//   <Clock className="w-5 h-5 text-indigo-600" />
//   <div>
//     <p className="font-medium">Response Time</p>
//     <p className="text-gray-600">Within 24 hours</p>
//   </div>
// </div>

// <div className="flex items-center gap-3">
//   <Clock className="w-5 h-5 text-indigo-600" />
//   <div>
//     <p className="font-medium">Response Time</p>
//     <p className="text-gray-600">Within 24 hours</p>
//   </div>
// </div>
