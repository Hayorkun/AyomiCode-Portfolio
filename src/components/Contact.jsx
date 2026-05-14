const Contact = () => {
  return (
    <section className="p-5 md:p-10">
      <div className="py-7 md:py-10 w-full md:w-[62.5%]">
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
              <label htmlFor="firstname" className="block text-xl mb-2">
                First name
              </label>
              <input
                placeholder="John"
                type="text"
                className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastname" className="block text-xl mb-2">
                Last name
              </label>
              <input
                placeholder="Doe"
                type="text"
                className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5"
              />
            </div>
          </div>
          {/* EMAIL */}
          <div className="flex-1">
            <label htmlFor="lastname" className="block text-xl mb-2">
              Email address
            </label>
            <input
              placeholder="John@example.com"
              type="email"
              className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5"
            />
          </div>
          {/* SUBJECT */}
          <div className="flex-1">
            <label htmlFor="lastname" className="block text-xl mb-2">
              Subject
            </label>
            <input
              placeholder="Project enquiry"
              type="text"
              className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white p-5 rounded-xl"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex-1">
            <label htmlFor="lastname" className="block text-xl mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project."
              type="text"
              className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 h-30"
            />
          </div>
          <button
            className="flex items-center justify-center py-3 px-6 rounded-xl self-start bg-orange-400"
            type="submit"
          >
            Send message <i className="fa-solid fa-right-long"></i>
          </button>
        </form>
      </div>
      <div className="py-7 md:py-10 w-full md:w[37.5%] border-1">


      </div>
    </section>
  );
};

export default Contact;
