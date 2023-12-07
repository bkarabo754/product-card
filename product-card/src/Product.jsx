import React from "react";
import ProductDesktop from "./assets/images/imageProductDesktop.jpg";
import imageMobile from "./assets/images/imageProductMobile.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";

const Product = () => {
  return (
    <div className="bg-cream h-screen w-screen flex-col grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
      <article className="p-6 md:p-32 rounded-md">
        <section className="max-w-full">
          <img
            src={ProductDesktop}
            alt="product card"
            className="hidden md:block w-full h-[500px] md:ml-[252px] rounded-l-lg object-contain"
          />
          <img
            src={imageMobile}
            alt="product card"
            className="w-full h-auto rounded-t-lg md:hidden"
          />
        </section>
      </article>

      <div className="bg-white p-6 md:pt-10 md:pr-24 md:h-[500px] m-6 md:mr-[552px] md:ml-auto mt-[-12.8rem] md:mt-6 md:rounded-r-lg rounded-b-lg ">
        <h2 className="uppercase text-sm tracking-[4px] text-dark-grayish-blue mb-2">
          Perfume
        </h2>
        <h1 className="font-fraunces text-very-dark-blue mb-4 leading-9 text-[2rem] ">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-dark-grayish-blue leading-normal mb-3">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <ul className="flex items-center mb-8">
          <li className="font-fraunces text-dark-cyan text-[2rem] mr-6">
            $149.99
          </li>
          <li className="line-through text-dark-grayish-blue">$169.99</li>
        </ul>
        <button className="py-3 w-full text-base bg-dark-cyan hover:bg-green-900 rounded-md text-white font-bold curesor-pointer flex items-center justify-center">
          <MdOutlineShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
