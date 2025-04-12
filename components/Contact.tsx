'use client'
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"
import BackgroundGradient from "@/components/BackgroundGradient";

interface ContactProps {
    defaultCourse?: string;
  }

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

export const Contact = ({ defaultCourse = "" }: ContactProps) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        course: defaultCourse,
        message: ''
    });

  const [loading, setLoading] = useState(false);

  const handleChange = (error: any) => {
    const { name, value } = error.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (error: any) => {
    error.preventDefault();
    if (!formData.course) {
      toast.error("Please select an option");
      return;
    }
    onSubmit(formData, setLoading);
  };


  return (
    <div className="w-full px-8 py-6 mx-auto overflow-hidden bg-gray-50 shadow-2xl rounded-xl lg:max-w-xl">
        <h1 className="text-xl font-semibold text-gray-800">
            Fill in your details below
        </h1>
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-600">Full Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="block w-full px-3 py-1.5 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            </div>
            <div className="flex-1 mt-3">
            <label className="block mb-1 text-sm text-gray-600">Company or Organisation</label>
            <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="block w-full px-3 py-1.5 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            </div>
            <div className="flex-1 mt-3">
            <label className="block mb-1 text-sm text-gray-600">Email Address</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email-id"
                className="block w-full px-3 py-1.5 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            </div>
            <div className="flex-1 mt-3">
            <label className="block mb-1 text-sm text-gray-600">Phone Number</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No."
                className="block w-full px-3 py-1.5 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            </div>
            <div className="flex-1 mt-3">
            <label className="block mb-1 text-sm text-gray-600">Looking For</label>
            <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="block w-full px-3 py-1.5 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
                <option value="" disabled>
                . . .
                </option>
                <option value="Courses">Courses</option>
                <option value="Workshops">Workshops</option>
                <option value="Penetration Testing">Penetration Testing</option>
                <option value="Corporate Trainings">Corporate Trainings</option>
            </select>
            </div>
            <div className="w-full mt-3">
            <label className="block mb-1 text-sm text-gray-600">Message</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
                className="block w-full h-24 px-3 py-1.5 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            ></textarea>
            </div>
            <button
            type="submit"
            className="w-full mt-4 px-6 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            disabled={loading}
            >
            {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    </div>
  );
};
