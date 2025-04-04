import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Thanks! We'll get in touch with you soon.");
      setSubmitted(true);
    } else {
      toast.error("Please fix the errors and try again.");
    }
  };

  return (
    <motion.div
      className="py-10 flex flex-col items-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-bold text-5xl mb-6">Let's Chat</h1>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-full py-2 px-4 border-green-500 w-full"
            data-aos="fade-right"
            whileFocus={{ scale: 1.05 }}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <motion.input
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-full py-2 px-4 border-green-500 w-full"
            data-aos="fade-left"
            whileFocus={{ scale: 1.05 }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <motion.input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-full py-2 px-4 border-green-500 w-full"
            whileFocus={{ scale: 1.05 }}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <motion.button
            type="submit"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-lg px-6 py-2.5"
            whileHover={{ scale: 1.1 }}
            disabled={Object.keys(errors).length > 0}
          >
            Send
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg"
        >
          <p>Message Sent Successfully!</p>
          <p>We'll get back to you soon.</p>
        </motion.div>
      )}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </motion.div>
  );
};

export default Contact;
