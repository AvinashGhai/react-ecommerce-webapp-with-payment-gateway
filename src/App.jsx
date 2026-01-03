import Navigation from "./customer/component/navigation/navigation";
import Homepage from "./customer/pages/Homepage/homepage";
import React from "react";
import Footer from "./customer/component/footer/footer.jsx";

export default function App() {
  return (
    <>
      <div><Navigation /></div>

      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold">
          home page
        </h1>
        <p className="mt-4 text-gray-600">
          Your e-commerce content goes here.
        </p>
      </main>
      <div>
        <Homepage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
