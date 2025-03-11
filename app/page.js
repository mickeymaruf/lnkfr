import Footer from "@/components/landing/footer";
import Testimonial from "@/components/landing/testimonial";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* header */}
      <header>
        <nav className="border-b border-gray-100 flex items-center justify-between px-5 md:px-20 py-4">
          <h5 className="font-medium text-2xl text-rose-600">lnkfr</h5>

          <ul className="flex items-center gap-x-8 text-sm">
            <li>Product</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>

          <div className="space-x-5 text-sm">
            <button>Log in</button>
            <button className="px-3 py-1 border border-gray-300 shadow-md rounded-lg bg-gradient-to-t from-gray-100 to-gray-50">
              Sign up
            </button>
          </div>
        </nav>

        {/* hero */}
        <div className="text-center px-5 py-40 container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5">
            Showcase Your Work with <span className="text-rose-600">lnkfr</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            The elegant portfolio platform for designers and developers who want{" "}
            <br className="hidden md:block" />
            to share their best work with clients and potential employers.
          </p>
          <div className="space-x-5 mt-8 mb-16">
            <button className="px-12 py-3 bg-rose-600 rounded-xl text-white shadow-lg">
              Get Started for Free
            </button>
            <Link href="/maruf">
              <button className="px-12 py-3 border-gray-300 rounded-xl border shadow-lg">
                See examples
              </button>
            </Link>
          </div>

          {/* Browser mockup */}
          <div className="relative w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-gray-300 overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mx-auto bg-white rounded-md px-4 py-1 text-sm text-gray-500">
                lnkfr.io/yourname
              </div>
            </div>
            <div className="p-5 bg-gray-100">
              <img
                src="/hero-image.png"
                alt="lnkfr portfolio example"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute left-0 top-0 w-full h-full"></div>
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-rose-500 via-rose-500/80 to-purple-600 w-full h-12 my-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 10%)" }}
        ></div>

        <section className="container mx-auto px-5 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">
            Showcase your work <br /> with precision and style
          </h1>
          <p className="text-lg text-gray-700">
            lnkfr gives developers and designers the tools to present their work{" "}
            <br className="hidden md:block" />
            professionally, with complete control over how their projects look
            and feel.
          </p>

          <div className="mt-10 w-3/5 mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  title: "Beautiful Profiles",
                  description:
                    "Create a personal profile that highlights your bio, skills, and contact information alongside your projects.",
                },
                {
                  title: "Project Showcase",
                  description:
                    "Upload and manage screenshots of your work with customizable layouts and descriptions.",
                },
                {
                  title: "Custom Links",
                  description:
                    "Add links to live websites, repositories, or any resources related to your project.",
                },
                {
                  title: "Easy Sharing",
                  description:
                    "Generate shareable links to send to clients, employers, or add to your resume.",
                },
                {
                  title: "Customization",
                  description:
                    "Tailor the look and feel of your showcase with custom colors, typography, and layouts.",
                },
                {
                  title: "Developer Friendly",
                  description:
                    "Add code snippets, tech stack details, and development notes to your projects.",
                },
              ].map((f, idx) => (
                <button key={idx} className="p-2 bg-yellow-200 -skew-3">
                  {f.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div
          className="bg-gradient-to-r from-rose-500 via-rose-500/80 to-purple-600 w-full h-12 my-20 px-5"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 10%)" }}
        ></div>

        <section className="container mx-auto px-5 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">
            Turn your ugly screenshots <br /> into sleek mockups
          </h1>
          <p className="text-lg text-gray-700">
            lnkfr gives developers and designers the tools to present their work{" "}
            <br className="hidden md:block" />
            professionally, with complete control over how their projects look
            and feel.
          </p>
          <div className="mt-10 md:w-4/5 mx-auto grid grid-cols-2">
            <div className="border border-r-0 p-5 flex items-center relative">
              <img className="" src="/pre-mock.png" alt="" />
              <div className="text-5xl absolute left-10 top-0 -translate-y-1/2 -rotate-12">
                🤮
              </div>
            </div>
            <div className="relative">
              <div className="text-5xl absolute right-10 top-0 -translate-y-1/2 rotate-12">
                😎
              </div>
              <img
                className="scale-[calc(100%+1px)]"
                src="/mock-2.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <div
          className="bg-gradient-to-r from-rose-500 via-rose-500/80 to-purple-600 w-full h-12 my-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 10%)" }}
        ></div>

        <Testimonial />

        <div
          className="bg-gradient-to-r from-rose-500 via-rose-500/80 to-purple-600 w-full h-12 my-10 px-5"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 10%)" }}
        ></div>

        <section className="container mx-auto py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-4">
            Wanna get yourself a profile?
          </h1>
          <p className="text-lg text-gray-700">
            lnkfr gives developers and designers the tools to present their
            work{" "}
          </p>
          <button className="mt-6 px-12 py-3 bg-rose-600 rounded-xl text-white shadow-lg">
            Get Started
          </button>
        </section>

        <Footer />
      </header>
    </main>
  );
}
