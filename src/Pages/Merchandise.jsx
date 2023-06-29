import React, { useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import "jquery";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "../Css/style.css";
import p1 from "../Image/Poster1.jpg";
import p2 from "../Image/poster2.jpg";
import p3 from "../Image/poster3.jpg";
import TokoSe from "../Image/TokoSemafit.png";
import "../../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"
import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";

const Merchandise = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const flickity = new Flickity(carouselRef.current, {
      wrapAround: true,
    });

    return () => {
      flickity.destroy();
    };
  }, []);

  return (
    <>
      <NavigationBar />

      <div className="my-6">
        <h1 className="text-center font-bold text-4xl">SEMAFIT STORE</h1>
        <h2 className="text-center font-semibold text-2xl">@toko.semafit</h2>
      </div>

      <div className="gallery js-flickity" ref={carouselRef}>
        <div className="gallery-cell">
          <img src={p1} alt="" srcset="" className="w-full h-full" />
        </div>
        <div className="gallery-cell">
          <img src={p2} alt="" srcset="" className="w-full h-full" />
        </div>
        <div className="gallery-cell">
          <img src={p3} alt="" srcset="" className="w-full h-full" />
        </div>

        {/* <div className="gallery-cell"></div> */}
        {/* <div className="gallery-cell"></div> */}
      </div>

      <div className="mt-16 mb-10 mx-auto text-center w-96">
        <h2 className="text-center font-semibold text-2xl">Merchandise</h2>
        <h1 className="text-center font-bold text-4xl">TokoSemaFIT</h1>
        <h2 className="text-center text-xl break-words whitespace-pre-line">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          quisquam error ipsa suscipit, eaque cupiditate cumque exercitationem
          laboriosam neque delectus cum facilis aut ab dolorem quasi, distinctio
          earum eos? Fuga?
        </h2>
      </div>

      {}

      <section className="overflow-hidden bg-[url(https://cdn.discordapp.com/attachments/1014443032797519914/1124009243905904701/Desain_tanpa_judul.jpg)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-5xl">
              Latest Update
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="https://www.instagram.com/toko.semafit/"
                target="blank"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 text-center">
          <header className="text-center">
            <p className="max-w-md mx-auto mt-4 text-gray-500">Bundle</p>

            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Anak Kampus
            </h2>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4 ">
            <li>
              <a className="block overflow-hidden group">
                <img
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124012611273506916/Snapinsta.app_339676838_702310228250744_5671931551316459820_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white">
                  {/* <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3> */}

                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      Rp. 40.000
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a className="block overflow-hidden group">
                <img
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124012610950529045/Snapinsta.app_339665792_212356301414562_5563539063557496738_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white">
                  {/* <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3> */}

                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 ">
                      {" "}
                      Pilihan Desain Lanyard
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            {/* <p className="max-w-md mx-auto mt-4 text-gray-500">Bundle</p> */}

            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              NOLI & NOBO
            </h2>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <li>
              <a className="block overflow-hidden group">
                <img
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124016078700433579/Snapinsta.app_339995645_4218500991708528_499988992288132034_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white">
                  {/* <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3> */}

                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      Rp. 5.000
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a className="block overflow-hidden group">
                <img
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124016078939492424/Snapinsta.app_339668173_190516797101727_8692166284739220016_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] mx-auto"
                />

                <div className="relative pt-3 bg-white">
                  {/* <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3> */}

                  <p className="mt-2 text-2xl">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900 ">
                      {" "}
                      Rp. 5.000
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="overflow-hidden bg-[url(https://cdn.discordapp.com/attachments/1014443032797519914/1124009243905904701/Desain_tanpa_judul.jpg)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-5xl">
              Latest Update
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="https://www.instagram.com/toko.semafit/"
                target="blank"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl text-center">
              Product Catalog
            </h2>

            {/* <p className="max-w-md mt-4 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p> */}
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">
            <li className="flex flex-col items-center">
              <a href="#" className="block overflow-hidden group">
                <img
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018359856537621/Snapinsta.app_340161769_245411251269892_4144012272337964815_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                {/* <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div> */}

              </a>

              <a
    className="my-5 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
    href="/download"
  >
    Check Catalog
  </a>


            </li>

            <li className="flex flex-col items-center">
              <a href="#" className="block overflow-hidden group">
                <img
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124025888250527774/Snapinsta.app_339702244_956481542034564_7910274465963337747_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                {/* <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div> */}
              </a>

              <a
    className="my-5 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
    href="/download"
  >
    Check Catalog
  </a>
            </li>

            <li className="flex flex-col items-center">
              <a href="#" className="block overflow-hidden group">
                <img
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124026137673220278/Snapinsta.app_339807749_168030642817173_6129546957616000384_n_1024.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                {/* <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div> */}
              </a>

              <a
    className="my-5 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
    href="/download"
  >
    Check Catalog
  </a>
            </li>

            {/* <li>
        <a href="#" className="block overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
            <h3
              className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Basic Tee
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li> */}
          </ul>
        </div>
      </section>
      {/*
  This component uses @tailwindcss/forms and @tailwindcss/typography

  yarn add @tailwindcss/forms @tailwindcss/typography
  npm install @tailwindcss/forms @tailwindcss/typography

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]

  @layer components {
    .no-spinner {
      -moz-appearance: textfield;
    }

    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
*/}


      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018359856537621/Snapinsta.app_340161769_245411251269892_4144012272337964815_n_1024.jpg"
                className="aspect-square w-full rounded-xl object-cover"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="1"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018326700564480/Snapinsta.app_339716358_882571886176223_4265324868679345371_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="2"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018326406959225/Snapinsta.app_339965353_610524907294750_1075715689311415708_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="3"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018329061957682/Snapinsta.app_339999901_1182574702402290_8050494206062948362_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />
                <img
                  alt="4"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018328571219968/Snapinsta.app_339712015_1604235683423888_8598257803674792375_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="5"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018328202125312/Snapinsta.app_340170066_1370101693786278_960693130576035238_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="6"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018327858188328/Snapinsta.app_339795517_963906711289281_14087211912252100_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="7"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018327585562764/Snapinsta.app_339984319_733548421485399_5802975702071825365_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="8"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018327195488327/Snapinsta.app_339802175_954462845916893_4879153512873879182_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="9"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018326943838279/Snapinsta.app_340032579_939251187101575_7809593834594327797_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="10"
                  src="https://cdn.discordapp.com/attachments/1014443032797519914/1124018361681063956/Snapinsta.app_339819310_247680927630417_3236153786451158324_n_1024.jpg"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="sticky top-20 ">
              {/* <strong
          className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong> */}

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">Lanyard</h1>

                  <p className="text-sm">Highest Rated Product</p>

                  <div className="-ms-0.5 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">Rp. 25.000 </p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p>
                    𝘺𝘰, 𝘩𝘪𝘢𝘴𝘪 𝘒𝘢𝘳𝘵𝘶 𝘔𝘢𝘩𝘢𝘴𝘪𝘴𝘸𝘢 𝘺𝘢𝘯𝘨 𝘬𝘢𝘮𝘶 𝘮𝘪𝘭𝘪𝘬𝘪 𝘥𝘦𝘯𝘨𝘢𝘯 𝘥𝘦𝘴𝘢𝘪𝘯
                    𝘭𝘢𝘯𝘺𝘢𝘳𝘥 𝘺𝘢𝘯𝘨 𝘴𝘢𝘯𝘨𝘢𝘵 𝘶𝘯𝘪𝘬 𝘥𝘢𝘳𝘪 𝘬𝘢𝘮𝘪!!! 𝘋𝘦𝘯𝘨𝘢𝘯 25𝘬 𝘢𝘫𝘢, 𝘬𝘢𝘮𝘶
                    𝘶𝘥𝘢𝘩 𝘣𝘪𝘴𝘢 𝘮𝘦𝘯𝘥𝘢𝘱𝘢𝘵𝘬𝘢𝘯 𝘴𝘦𝘣𝘶𝘢𝘩 𝘭𝘢𝘯𝘺𝘢𝘳𝘥 𝘥𝘦𝘯𝘨𝘢𝘯 𝘨𝘢𝘺𝘢 𝘺𝘢𝘯𝘨
                    𝘬𝘦𝘬𝘪𝘯𝘪𝘢𝘯. 𝘑𝘢𝘯𝘨𝘢𝘯 𝘳𝘢𝘨𝘶𝘬𝘢𝘯 𝘬𝘶𝘢𝘭𝘪𝘵𝘢𝘴 𝘺𝘢𝘯𝘨 𝘬𝘢𝘮𝘪 𝘵𝘢𝘸𝘢𝘳𝘬𝘢𝘯,
                    𝘵𝘦𝘳𝘫𝘢𝘮𝘪𝘯 𝘣𝘢𝘪𝘬 👍😄 𝘈𝘺𝘰, 𝘣𝘶𝘳𝘶𝘢𝘯 𝘣𝘦𝘭𝘪 𝘴𝘦𝘬𝘢𝘳𝘢𝘯𝘨 𝘴𝘦𝘣𝘦𝘭𝘶𝘮
                    𝘬𝘦𝘩𝘢𝘣𝘪𝘴𝘢𝘯!!!
                  </p>
                </div>

                {/* <button className="mt-2 text-sm font-medium underline">Read More</button> */}
              </div>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="color_tt" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #1
                      </span>
                    </label>

                    <label htmlFor="color_fr" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #2
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #3
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #4
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #5
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #6
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #7
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #8
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #9
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        #10
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/* <fieldset className="mt-4">
            <legend className="mb-1 text-sm font-medium">Size</legend>

            <div className="flex flex-wrap gap-1">
              <label htmlFor="size_xs" className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_xs"
                  className="peer sr-only"
                />

                <span
                  className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  XS
                </span>
              </label>

              <label htmlFor="size_s" className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_s"
                  className="peer sr-only"
                />

                <span
                  className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  S
                </span>
              </label>

              <label htmlFor="size_m" className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_m"
                  className="peer sr-only"
                />

                <span
                  className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  M
                </span>
              </label>

              <label htmlFor="size_l" className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_l"
                  className="peer sr-only"
                />

                <span
                  className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  L
                </span>
              </label>

              <label htmlFor="size_xl" className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id="size_xl"
                  className="peer sr-only"
                />

                <span
                  className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  XL
                </span>
              </label>
            </div>
          </fieldset> */}

                <div className="mt-8 flex gap-4">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>

                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value="1"
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="block rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Merchandise;
