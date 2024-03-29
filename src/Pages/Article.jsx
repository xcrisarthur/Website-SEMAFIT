import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import "../Js/script";
import "swiper/css";
import React, { useRef, useEffect, useState } from "react";

const Article = () => {
  return (
    <>
      <NavigationBar />

      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg">
              <div className="sticky top-20">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-5">
                  <div className="rounded-lg">
                    <h1 className="text-xl font-bold sm:text-2xl">Search</h1>
                  </div>
                  <div className="rounded-lg lg:col-span-2">
                    <div className="relative">
                      <label htmlFor="Search" className="sr-only">
                        {" "}
                        Search{" "}
                      </label>

                      <input
                        type="text"
                        id="Search"
                        placeholder="  Search for ..."
                        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                      />

                      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button
                          type="button"
                          className="text-gray-600 hover:text-gray-700"
                        >
                          {/* <span className="sr-only">Search</span> */}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-bold pt-5"> C A T E G O R I E S </p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href=""
                      className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <span className="text-sm font-medium"> Culture </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>

                        <span className="text-sm font-medium"> Food </span>
                      </div>

                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                        5
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>

                      <span className="text-sm font-medium"> Semafit </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>

                        <span className="text-sm font-medium">
                          {" "}
                          IT Maranatha{" "}
                        </span>
                      </div>

                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                        3
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="text-sm font-medium"> Film </span>
                    </a>
                  </li>
                </ul>

                <p className="text-lg font-bold pt-5">
                  {" "}
                  M O S T &nbsp;&nbsp;&nbsp; V I E W E D &nbsp;&nbsp;&nbsp; A R
                  T I C L E S{" "}
                </p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href=""
                      className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 256 512"
                      >
                        <path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" />
                      </svg>
                      <span className="text-lg font-medium"> Lorem </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" />
                        </svg>

                        <span className="text-lg font-medium"> Food </span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                      >
                        <path d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" />
                      </svg>

                      <span className="text-lg font-medium"> Semafit </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 384 512"
                        >
                          <path d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" />
                        </svg>

                        <span className="text-lg font-medium">
                          {" "}
                          IT Maranatha{" "}
                        </span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                      >
                        <path d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" />
                      </svg>

                      <span className="text-lg font-medium"> Film </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-white/90"
                      >
                        10th Oct 2022
                      </time>
                      <a href="#">
                        <h3 className="mt-0.5 text-lg text-white">
                          How to position your furniture for positivity
                        </h3>
                      </a>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                      </p>
                      <div className="flex justify-end items-center mt-4">
                        {" "}
                        <button
                          className=" group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                          // type="button"
                          data-drawer-target="drawer-right-example"
                          data-drawer-show="drawer-right-example"
                          data-drawer-placement="right"
                          aria-controls="drawer-right-example"
                        >
                          <span className="absolute -end-full transition-all group-hover:end-4">
                            <svg
                              className="h-5 w-5 rtl:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>

                          <span className="text-sm font-medium transition-all group-hover:me-4">
                            Read More
                          </span>
                        </button>
                        {/* <!-- drawer component --> */}
                        <div
                          id="drawer-right-example"
                          className="fixed top-16 right-0 z-50 h-screen w-screen p-4 overflow-y-auto transition duration-700 ease-in-out translate-x-full bg-white dark:bg-gray-800"
                          tabIndex="-1"
                          aria-labelledby="drawer-right-label"
                        >
                          <p
                            id="drawer-right-label"
                            className="inline-flex items-center mb-4 text-3xl font-semibold text-gray-900 dark:text-gray-900"
                          >
                            <svg
                              className="mx-5"
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                            </svg>
                            [Judul Article]
                          </p>

                          <button
                            type="button"
                            data-drawer-hide="drawer-right-example"
                            aria-controls="drawer-right-example"
                            className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close menu</span>
                          </button>

                          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-3">
                            <div className="rounded-lg ms-auto">
                              <p className="text-3xl">[Nama Divisi]</p>
                              <p className="text-2xl">Panitia</p>
                              <ul className="list-disc">
                                <li>John</li>
                                <li>Doe</li>
                              </ul>
                            </div>
                            <div className="h-32 rounded-lg bg-gray-100 lg:col-span-2">
                              <img
                                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                                className="object-cover w-full h-full"
                              />
                              <div>
                                <p className="indent-10 text-justify mt-7">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Molestiae vero rerum
                                  repellat animi impedit perferendis numquam
                                  eligendi corrupti perspiciatis expedita
                                  veritatis natus, voluptatum ipsum dolor in
                                  quidem laboriosam odio saepe deleniti sunt!
                                  Magnam reiciendis alias omnis corporis,
                                  explicabo nam dolor assumenda sit quisquam
                                  sapiente molestiae, tempore eveniet accusamus
                                  placeat quasi! A praesentium dolore
                                  repudiandae necessitatibus aspernatur
                                  doloribus, reiciendis quo ab pariatur
                                  consectetur porro tenetur ratione id nulla
                                  corrupti unde, similique quas temporibus ipsum
                                  sapiente! Blanditiis, quam. Maiores tempore
                                  temporibus eum! Veniam voluptatem quaerat,
                                  libero, similique quisquam est tempore animi
                                  in molestias sit voluptates perferendis
                                  ratione nesciunt soluta labore molestiae nisi?
                                </p>
                              </div>
                            </div>
                            <div className="h-32 rounded-lg bg-gray-100">
                              <div>
                                <a
                                  href="#"
                                  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                                >
                                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                                  <div className="sm:flex sm:justify-between sm:gap-4">
                                    <div>
                                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        Cristianto Tri Arthurito
                                      </h3>
                                      <p className="mt-1 text-xs font-medium text-gray-600">
                                        Content Writer
                                      </p>
                                    </div>

                                    <div className="hidden sm:block sm:shrink-0">
                                      <img
                                        alt="Paul Clapton"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                                      />
                                    </div>
                                  </div>

                                  <div className="mt-4">
                                    <p className="max-w-[40ch] text-sm text-gray-500">
                                      Deskripsi Diri - Lorem ipsum dolor sit
                                      amet consectetur adipisicing elit.
                                      Asperiores aperiam earum neque ad aliquid
                                      deleniti. Eligendi similique ullam natus
                                      tenetur?
                                    </p>
                                  </div>

                                  <dl className="mt-6 flex gap-4 sm:gap-6">
                                    <div className="flex flex-col-reverse">
                                      <dt className="text-sm font-medium text-gray-600">
                                        Published
                                      </dt>
                                      <dd className="text-xs text-gray-500">
                                        31st Oct, 2023
                                      </dd>
                                    </div>
                                  </dl>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </article>

                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-white/90"
                      >
                        10th Oct 2022
                      </time>
                      <a href="#">
                        <h3 className="mt-0.5 text-lg text-white">
                          How to position your furniture for positivity
                        </h3>
                      </a>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                      </p>
                      <div className="flex justify-end items-center mt-4">
                        {" "}
                        <a
                          className=" group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                          href="/download"
                        >
                          <span className="absolute -end-full transition-all group-hover:end-4">
                            <svg
                              className="h-5 w-5 rtl:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>

                          <span className="text-sm font-medium transition-all group-hover:me-4">
                            Read More
                          </span>
                        </a>
                      </div>{" "}
                    </div>
                  </div>
                </article>

                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-white/90"
                      >
                        10th Oct 2022
                      </time>
                      <a href="#">
                        <h3 className="mt-0.5 text-lg text-white">
                          How to position your furniture for positivity
                        </h3>
                      </a>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                      </p>
                      <div className="flex justify-end items-center mt-4">
                        {" "}
                        <a
                          className=" group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                          href="/download"
                        >
                          <span className="absolute -end-full transition-all group-hover:end-4">
                            <svg
                              className="h-5 w-5 rtl:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>

                          <span className="text-sm font-medium transition-all group-hover:me-4">
                            Read More
                          </span>
                        </a>
                      </div>{" "}
                    </div>
                  </div>
                </article>

                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <time
                        dateTime="2022-10-10"
                        className="block text-xs text-white/90"
                      >
                        10th Oct 2022
                      </time>
                      <a href="#">
                        <h3 className="mt-0.5 text-lg text-white">
                          How to position your furniture for positivity
                        </h3>
                      </a>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                      </p>
                      <div className="flex justify-end items-center mt-4">
                        {" "}
                        <a
                          className=" group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                          href="/download"
                        >
                          <span className="absolute -end-full transition-all group-hover:end-4">
                            <svg
                              className="h-5 w-5 rtl:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>

                          <span className="text-sm font-medium transition-all group-hover:me-4">
                            Read More
                          </span>
                        </a>
                      </div>{" "}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Article;
