import { NavLink } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (!formData.firstName) {
      alert("First name is required");
      return;
    }
    alert("Form submitted");
  };

  return (
    <section className="p-5 md:p-10">
      <div className="md:items-center py-5  block md:flex md:gap-10">
        <div className="w-full md:w-[62.5%]">
          <p className="mb-3 text-orange-300 ">LET'S WORK TOGETHER</p>
          <h1 className="text-4xl md:text-5xl font-bold md:font-extrabold mb-5">
            Get in touch
          </h1>
          <p className="mb-5">
            Have a project in mind or a role to fill? I'd love to hear from you.
          </p>

          <form className="flex flex-col gap-5">
            {/* NAME FIELDS */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-2">
                  First name
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    type="text"
                    className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 mt-3 text-sm"
                  />
                  <span className="" id="firstnameerror"></span>
                </label>
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-2">
                  Last name
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    type="text"
                    className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 mt-3 text-sm"
                  />
                </label>
              </div>
            </div>
            {/* EMAIL */}
            <div className="flex-1">
              <label htmlFor="email" className="block mb-2">
                Email address
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="John@example.com"
                  type="email"
                  className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 text-sm"
                />
              </label>
            </div>
            {/* SUBJECT */}
            <div className="flex-1">
              <label htmlFor="subject" className="block mb-2">
                Subject
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project enquiry"
                  type="text"
                  className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white p-5 rounded-xl text-sm"
                />
              </label>
            </div>

            {/* MESSAGE */}
            <div className="flex-1">
              <label htmlFor="message" className="block mb-2">
                Message
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project."
                  className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 h-15 text-sm"
                />
              </label>
            </div>
            <button
              className="flex  text-sm items-center justify-center py-2 px-4 rounded-xl self-start bg-orange-400"
              type="submit"
              onSubmit={handleSubmit}
            >
              Send message <i className="fa-solid fa-right-long"></i>
            </button>
          </form>
        </div>
        <div className="py-7 md:py-10 w-full md:w-[37.5%] ">
          <div className="flex items-center self-center gap-3 border border-orange-600/70 text-white rounded-xl px-5 h-20 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60 opacity-90"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
            </span>
            <div>
              <h3 className="text-lg font-semibold">Currently Available</h3>
              <p className="text-sm text-gray-300/70">
                Open to freelance & full-time roles
              </p>
            </div>
          </div>
          <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3">
            <span>
              <img
                className="w-10 border-1 border-orange-400/30 p-1 rounded-lg"
                src="https://ik.imagekit.io/AyomiCode/email-1-svgrepo-com.svg"
                alt="Email"
              />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-300/70">
                Ayomideyerokun54@gmail.com
              </p>
            </div>
          </div>
          <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3">
            <span>
              <img
                className="w-10 border-1 border-orange-400/30 p-1 rounded-lg"
                src="https://ik.imagekit.io/AyomiCode/github-removebg-preview.png"
                alt="Email"
              />
            </span>
            <div>
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p className="text-sm text-gray-300/70">
                Ayomideyerokun54@gmail.com
              </p>
            </div>
          </div>
          <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3">
            <span>
              <img
                className="w-10 border-1 border-orange-400/30 p-1  rounded-lg"
                src="https://ik.imagekit.io/AyomiCode/briefcase-removebg-preview.png"
                alt="Email"
              />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Linkedin</h3>
              <p className="text-sm text-gray-300/70">
                Ayomideyerokun54@gmail.com
              </p>
            </div>
          </div>
          <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3">
            <span>
              <img
                className="w-10 border-1 border-orange-400/30 p-1 rounded-lg"
                src="https://ik.imagekit.io/AyomiCode/57642948_sl_z_072523_61700_01.jpg"
                alt="Email"
              />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-300/70">
                Ayomideyerokun54@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
