'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"
import BackgroundGradient from "@/components/BackgroundGradient";


async function onSubmit(values: any, setLoading: (loading: boolean) => void) {
  try {
    setLoading(true);
    await axios.post("/api/contact", values);
    toast("Message sent succesfully. \nWe will contact you as soon as possible.");
  } catch (error) {
    console.log(error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
}

export const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (error: any) => {
    const { name, value } = error.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (error: any) => {
    error.preventDefault();
    onSubmit(formData, setLoading);
  };


  return (
    <section
      id="contact"
      className="relative py-10 overflow-x-clip bg-cover bg-fixed sm:bg-left bg-center"
    >
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={14}/>
      <div className="container relative">
        <div className="py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6 p-8 h-full w-full ">
              <div className="mb-4 flex flex-col text-4xl text-gray-900 md:text-5xl lg:text-7xl text-center lg:text-left">
                <div className="tracking-tight text-gray-300 font-bold mb-2">
                  Contact Us
                </div>
                <p className="text-center lg:text-left text-gray-300 text-[18px] tracking-wide leading-none">
                  Reach out and we'll get in touch within 24 hours.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-50 shadow-2xl rounded-xl lg:max-w-xl">
                <h1 className="text-2xl font-semibold text-gray-800">
                  Fill in your details below
                </h1>
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="flex-1">
                    <label className="block mb-1 text-sm text-gray-600">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Company or Organisation</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email-id"
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone No."
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 mt-4">
                  <label className="block mb-1 text-sm text-gray-600">Looking For</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option value="">Courses</option>
                    <option>Workshops</option>
                    <option>Penetration Testing</option>
                    <option>Corporate Trainings</option>
                  </select>
                </div>
                  <div className="w-full mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message..."
                      className="block w-full h-32 px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 px-6 py-2.5 leading-5 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
