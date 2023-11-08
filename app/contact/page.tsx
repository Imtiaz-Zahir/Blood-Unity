import React from "react";

export default function page() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div className="text-center md:text-start">
        <h1 className="font-bold text-4xl">Leave Us A Message</h1>
        <p className="text-slate-500 text-lg my-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.{" "}
        </p>
        <div className="flex items-center my-4 flex-col md:flex-row">
        <svg
              className="mx-4 w-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="envelope-alt"
            >
              <path
                fill="#DC2626"
                d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z"
              ></path>
            </svg>
          <div>
            <h6 className="font-bold text-xl my-2">Email Address :</h6>
            <p className="text-lg text-slate-500">support@example.com</p>
          </div>
        </div>
        <div className="flex items-center my-4 flex-col md:flex-row">
        <svg
              className="mx-4 w-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="phone-volume"
            >
              <path
                fill="#DC2626"
                d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"
              ></path>
            </svg>
          <div>
            <h6 className="font-bold text-xl my-2">Phone Number :</h6>
            <p className="text-lg text-slate-500">+8802343546654</p>
          </div>
        </div>
        <div className="flex items-center my-4 flex-col md:flex-row">
        <svg
              className="mx-4 w-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="location-pin-alt"
            >
              <path
                fill="#DC2626"
                d="M12,10.8a2,2,0,1,0-2-2A2,2,0,0,0,12,10.8Zm-.71,6.91a1,1,0,0,0,1.42,0l4.09-4.1a6.79,6.79,0,1,0-9.6,0ZM7.23,8.34A4.81,4.81,0,0,1,9.36,4.79a4.81,4.81,0,0,1,5.28,0,4.82,4.82,0,0,1,.75,7.41L12,15.59,8.61,12.2A4.77,4.77,0,0,1,7.23,8.34ZM19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          <div>
            <h6 className="font-bold text-xl my-2">Our Location :</h6>
            <p className="text-lg text-slate-500">119/A, Mount View, London</p>
          </div>
        </div>
      </div>
      <form className="from-shadow gap-4 w-full rounded-xl">
        <input
          className="my-2 border border-slate-400 w-full h-12 rounded-md px-4 text-lg font-medium"
          type="text"
          placeholder="Your Name"
          name="name"
          id=""
          required
        />

        <input
          className="my-2 border border-slate-400 w-full h-12 rounded-md px-4 text-lg font-medium"
          type="email"
          placeholder="Your Email"
          name="email"
          id=""
          required
        />

        <input
          className="my-2 border border-slate-400 w-full h-12 rounded-md px-4 text-lg font-medium"
          type="text"
          placeholder="subject"
          name="sub"
          id=""
          required
        />

        <textarea
          className="my-2 border border-slate-400 w-full rounded-md p-4 text-lg font-medium"
          name="comment"
          rows={5}
          placeholder="Wright your message"
          required
        ></textarea>

        <div className="flex justify-start items-center">
          <button
            className="uppercase py-3 px-8 bg-red-600 hover:bg-blue-900 text-white font-bold rounded-md transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
