"use client";
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import ScrollToDown from "@/components/ScrollToDown";
import Image from "next/image";

const projects = [
  { _id: 1, cover: "/171shots_so.png" },
  { _id: 2, cover: "/176shots_so.png" },
  { _id: 3, cover: "/340shots_so.png" },
  { _id: 5, cover: "/665shots_so.png" },
  { _id: 7, cover: "/881shots_so.png" },
  { _id: 4, cover: "/938shots_so.png" },
  { _id: 6, cover: "/158shots_so.png" },
  { _id: 8, cover: "/601shots_so.png" },
];

export default function Page() {
  const [opened, setOpened] = useState(null);
  const open = (id) => setOpened(id);
  const close = () => setOpened(null);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100">
      <aside className="md:sticky top-0 h-full md:w-2/4 p-8 md:p-16 pb-0 md:pb-16 text-gray-700">
        <Image
          src="/Maruf.jpg"
          alt="Maruf"
          width={170}
          height={170}
          className="rounded-full mb-6 shadow"
        />
        <h1 className="mb-1 text-2xl font-bold lg:mb-3 lg:text-4xl lg:font-extrabold text-gray-800">
          Maruf
        </h1>
        <div className="flex flex-col gap-1 lg:flex-row lg:gap-4">
          <h2 className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 text-base-content/80 lg:h-5 lg:w-5"
            >
              <path
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-base-content/80">Bangladesh</span>
          </h2>
          <div>
            <p className="flex items-center gap-1">
              <FaDollarSign />
              <span className="text-base-content/80">25/hour</span>
            </p>
          </div>
        </div>
        <p className="mt-4">
          <em>
            I build websites that don’t just look good — they make you money
          </em>
        </p>
      </aside>
      <main className="md:sticky top-0 h-full w-full md:pl-0 p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            onClick={() => open(p._id)}
            className="relative group overflow-hidden cursor-pointer"
          >
            <img className="rounded-lg shadow-md" src={p.cover} alt="Maruf" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center text-white text-sm">
              Click to view
            </div>
          </div>
        ))}
      </main>

      {opened && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-2xl bg-black/30"></div>
      )}

      <button
        type="button"
        onClick={close}
        className={`fixed ${
          opened ? "top-16" : "top-full"
        } right-10 md:right-40 z-50 duration-300`}
      >
        <IoCloseCircle size={45} />
      </button>

      <div
        className={`fixed left-1/2 ${
          opened ? "top-10" : "top-full"
        } h-full w-full md:w-[85%] -translate-x-1/2 bg-white p-10 pb-28 md:p-16 text-lg rounded-t-3xl duration-300 overflow-y-scroll overflow-x-hidden`}
      >
        {/* <div>
          <p className="font-medium mb-4">Apple Intelligence and macOS</p>{" "}
          <h1 className="text-5xl font-bold">Easy to use. Easy to love.</h1>
          <div className="p-10 bg-gray-100 mt-10 rounded-3xl">
            <p className="text-2xl">
              Familiar as iPhone. You’ll feel right at home on Mac, with many of
              the same apps as iPhone — like Messages, Photos, Notes, and
              FaceTime.
            </p>
            <img src="221shots_so.png" alt="" />
          </div>
        </div> */}

        {opened === 1 && (
          <div>
            <p className="font-medium mb-4">Try Miracle</p>
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Converted</span> this landing page
              from <span className="text-black">figma</span>
            </p>
            <ScrollToDown src="/miracle/home.png" />
            <br />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Built</span> this beautiful
              functional checkout page
            </p>
            <ScrollToDown src="/miracle/checkout.png" />
          </div>
        )}

        {opened === 2 && (
          <div>
            <p className="font-medium mb-4">Try Bello</p>
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Converted</span> this landing page
              from <span className="text-black">figma</span>, added checkout
            </p>
            <img src="/bello/641shots_so.png" alt="" />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Built</span> this spinning
              wheel/lucky draw
            </p>
            <img src="/bello/93shots_so.png" alt="" />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Developed</span> product media (reels
              like) feature
            </p>
            <div className="relative">
              <img src="/bello/202shots_so.png" alt="" />
              <img
                className="absolute left-0 top-0 translate-y-20 translate-x-[350px]"
                src="/bello/781shots_so.png"
                alt=""
              />
            </div>
          </div>
        )}

        {opened === 3 && (
          <div>
            <p className="font-medium mb-4">Group 107</p>
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Designed</span> this project
              management tool
            </p>
            <img src="/group107/407shots_so.png" alt="" />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Task details</span>
            </p>
            <img src="/group107/229shots_so.png" alt="" />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Developed</span> this drag & drop
              kanban board
            </p>
            <img src="/group107/395shots_so.png" alt="" />
          </div>
        )}

        {opened === 4 && (
          <div>
            <p className="font-medium">Quick Cart</p>
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              href="https://yourwaitlist.netlify.app/"
            >
              yourwaitlist.netlify.app
            </a>
            <br />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">A</span> faster to integrate and Easy
              to maintain cart plugin for your website.
            </p>
            <ScrollToDown src="/quickcart/landing.png" />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Not</span> just a plugin, comes with
              a full bundle (Product Management Dashboard).
            </p>
            <ScrollToDown src="/quickcart/dashboard.png" onlyMock />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Customize</span> your theme as you
              wish
            </p>
            <ScrollToDown src="/quickcart/theme.png" onlyMock />
          </div>
        )}

        {opened === 5 && (
          <div>
            <p className="font-medium mb-4">Poolnator</p>
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Built</span> this landing page
            </p>
            <ScrollToDown src="/poolnator/screencapture-1.png" />
            <br />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Built</span> this cart
            </p>
            <ScrollToDown
              src="/poolnator/screencapture-4.png"
              onlyMock={true}
            />
            <br />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Single product page</span>
            </p>
            <ScrollToDown src="/poolnator/screencapture-2.png" />

            <br />
            <br />

            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Checkout</span> page
            </p>
            <ScrollToDown src="/poolnator/screencapture-3.png" />
          </div>
        )}

        {opened === 6 && (
          <div>
            <p className="font-medium mb-1">didireply</p>
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              href="https://yourwaitlist.netlify.app/"
            >
              yourwaitlist.netlify.app
            </a>
            <br />
            <br />
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">A Chrome extension </span>
              to save notes on LinkedIn profile. Turn LinkedIn connections into
              meaningful relationships. ❤️
              <br />
            </p>
            <div className="p-10 bg-gray-100 mt-10 rounded-3xl">
              <p className="text-xl md:text-2xl">
                <span className="text-black">Upon</span> installing the
                extension...
              </p>
              <ScrollToDown
                src="/didirp/1.png"
                onlyMock={true}
                noPadding={true}
              />
              <ScrollToDown
                src="/didirp/2.png"
                onlyMock={true}
                noPadding={true}
              />
              <ScrollToDown
                src="/didirp/3.png"
                onlyMock={true}
                noPadding={true}
              />

              <div className="md:w-11/12 rounded-lg py-10">
                <div style={{ boxShadow: "2px 10px 15px 0px #727D73" }}>
                  <img
                    className="rounded-t-lg"
                    src="/browser-mockup-bar.png"
                    alt=""
                  />
                  <iframe
                    className="w-full h-[200px] sm:h-[250px] md:h-[470px] aspect-video"
                    src="https://www.youtube.com/embed/cyVdXqXay8I?si=ebpEs4jJOwoqlD-j"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {opened === 7 && (
          <div>
            <p className="font-medium mb-4">Theme builder</p>
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">Developed</span> no-code
              drag-and-drop website builders in Next.js.
            </p>
            <img src="/builder/632shots_so.png" alt="" />
            <img src="/builder/567shots_so.png" alt="" />
            <img src="/builder/214shots_so.png" alt="" />
          </div>
        )}

        {opened === 8 && (
          <div>
            <a
              target="_blank"
              href="https://marufhossain.netlify.app"
              className="font-medium mb-4 hover:underline inline-block text-blue-700"
            >
              marufhossain.netlify.app
            </a>
            <p className="text-xl md:text-3xl font-medium text-gray-500">
              <span className="text-black">My portfolio</span> website
            </p>
            <img src="/portfolio/98shots_so.png" alt="" />
            <img src="/portfolio/334shots_so.png" alt="" />
            <img src="/portfolio/455shots_so.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
