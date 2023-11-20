import React from "react";

export default function page() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-20 lg:flex lg:justify-center">
      <div className="text-center mb-10 lg:w-3/4">
        <p className="text-red-600 font-semibold">WHO WE ARE</p>
        <h2 className="text-3xl font-bold text-center my-8 sm:text-4xl">
          Meet the People of [Your Organization Name]
        </h2>
        <p className="text-center text-lg text-slate-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
      </div>
    </section>
  );
}
