import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Website Fakultas",
      desc: "Jelajahi lebih dalam tentang fakultas kami di website fakultas kami!",
      link: {
        name: "https://it.maranatha.edu/",
        href: "https://it.maranatha.edu/",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      ),

      title: "Instagram",
      desc: "Ikuti perjalanan kami di Instagram untuk melihat sisi lain yang belum pernah kamu temukan!",
      link: {
        name: "@semafit.maranatha",
        href: "https://www.instagram.com/semafit.maranatha/",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-youtube"
          viewBox="0 0 16 16"
        >
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg>
      ),

      title: "Youtube",
      desc: "jangan lewatkan konten seru dan bermanfaat di akun YouTube kami!",
      link: {
        name: "SEMAFIT Maranatha",
        href: "https://www.youtube.com/@semafitmaranatha497",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
      ),

      title: "Email",
      desc: "Ada pertanyaan atau ingin menjalin kerja sama dengan kami? Jangan ragu untuk menghubungi kami melalui email!",
      link: {
        name: "Send us DMs",
        href: "",
      },
    },
  ];
  return (
    <>
      <NavigationBar />

      <section>
        <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2 ">
          <div class="bg-gray-50 border-r-4">

          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.11012184668033!2d107.58097030174395!3d-6.886467404489373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6873bb80d89%3A0xac80cbb5325a54e4!2sGraha%20Widya%20Maranatha!5e0!3m2!1sen!2sid!4v1681526535328!5m2!1sen!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>

          <div class="bg-white py-12 md:py-10">
            <div class="mx-auto max-w-2xl px-4 lg:px-8">
              <div className="">
                <div className="text-center space-y-2">
                  <h1 className="text-gray-800 text-2xl font-bold sm:text-5xl">
                    Get in touch
                  </h1>
                  <p className="mt-3">Let us know how we can help</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-3">
                {contactMethods.map((item, idx) => (
                  <div key={idx} className="">
                    <a href={item.link.href}>
                    <div className="mt-5 flex items-center gap-x-3 justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                      
                      <div className="flex-none w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                        {item.icon}
                      </div>
                      <p className="text-gray-800 text-lg font-medium xl:text-xl">
                        {item.title}
                      </p>
                    </div>
                    </a>
                    <p className="text-center">{item.desc}</p>
                    <a
                      href={item.link.href}
                      className="flex items-center justify-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium "
                    >
                      {item.link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              <div className="relative my-10">
                <span className="block w-full h-px bg-gray-300"></span>
                <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                  Or continue with
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 mt-7 lg:pb-12"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Name"
                      type="name"
                      id="name"
                      name="name"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <main className="w-full flex">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <img src="https://floatui.com/logo-dark.svg" width={150} />
            <div className=" mt-16 space-y-3">
              <h3 className="text-white text-3xl font-bold">
                Start growing your business quickly
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features for 30-days, No
                credit card required.
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              filter: "blur(118px)",
            }}
          ></div>
        </div>

        <div className="flex-1 flex items-center justify-center h-screen">
          <div className="w-full max-w-2xl space-y-8 px-4 bg-white text-gray-600 sm:px-0 h-full">
            <div className="">
              <img
                src="https://floatui.com/logo.svg"
                width={150}
                className="lg:hidden"
              />
              <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
                            <p className="">Already have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p>
                        </div>

              <div className="text-center space-y-2">
                <h1 className="text-gray-800 text-2xl font-bold sm:text-6xl">
                  Get in touch
                </h1>
                <p className="mt-3">Let us know how we can help</p>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-x-3 gap-y-3">
            {contactMethods.map((item, idx) => (
                  <div key={idx} className="">
                    <div className="mt-5 flex items-center gap-x-3 justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                      <div className="flex-none w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                        {item.icon}
                      </div>
                      <p className="text-gray-800 text-lg font-medium xl:text-xl">
                        {item.title}
                      </p>
                    </div>
                    <p>{item.desc}</p>
                    <a
                      href={item.link.href}
                      className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium"
                    >
                      {item.link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937"
                    fill="#1DA1F2"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_910_21)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z"
                      fill="#191717"
                    />
                    <path
                      d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z"
                      fill="#191717"
                    />
                    <path
                      d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z"
                      fill="#191717"
                    />
                    <path
                      d="M11.0085 37.714C10.8614 37.8167 10.6111 37.714 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3297 10.3503 37.2771 10.3503 37.224C10.3503 37.1709 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9395C10.619 36.8407 10.8694 36.9395 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.714Z"
                      fill="#191717"
                    />
                    <path
                      d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z"
                      fill="#191717"
                    />
                    <path
                      d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0059C13.222 39.9268 13.0432 39.7055 13.0948 39.5159C13.1465 39.3262 13.4207 39.2393 13.6949 39.3262C13.9691 39.4131 14.144 39.6226 14.0923 39.8162Z"
                      fill="#191717"
                    />
                    <path
                      d="M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z"
                      fill="#191717"
                    />
                    <path
                      d="M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z"
                      fill="#191717"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_910_21">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>

            
            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                Or continue with
              </p>
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 mt-7 lg:pb-12"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Name"
                      type="name"
                      id="name"
                      name="name"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                  Submit
                </button>
              </form>
          </div>
        </div>
      </main> */}

      {/* <div className="container">
        <main className="flex overflow-hidden">
          <div className="flex-1 hidden lg:block">
            <img
              src="https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg"
              className=" object-cover"
            />
          </div>
          <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
            <div className="max-w-xl flex-1 mx-auto text-gray-600">
              <div className="text-center">
                <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Get in touch
                </h1>
                <p className="mt-3">Let us know how we can help</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12 gap-y-6 gap-x-12 lg:gap-x-0 lg:mt-0">
                {contactMethods.map((item, idx) => (
                  <div key={idx}>
                    <div className="mt-5 flex items-center gap-x-3">
                      <div className="flex-none w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                        {item.icon}
                      </div>
                      <p className="text-gray-800 text-lg font-medium xl:text-xl">
                        {item.title}
                      </p>
                    </div>
                    <p>{item.desc}</p>
                    <a
                      href={item.link.href}
                      className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium"
                    >
                      {item.link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 mt-7 lg:pb-12"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Name"
                      type="name"
                      id="name"
                      name="name"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-400 p-3 text-sm bg-white border shadow-sm focus:outline-none focus:border-slate-950 focus:ring-slate-950 block sm:text-sm focus:ring-1"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </div> */}

      {/* <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
          <div>
            <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
              {contactMethods.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
                >
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                  <a
                    href={item.link.href}
                    className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium"
                  >
                    {item.link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main> */}
      <Footer />
    </>
  );
};

export default Contact;
