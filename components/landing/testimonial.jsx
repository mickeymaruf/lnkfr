import React from "react";
import TestimonialCard from "./testimonial-card";

const testimonials = [
  {
    quote:
      "lnkfr is a game changer! It made sharing my work easier and more professional in just a few clicks.",
    name: "Maruf",
    username: "mickeymaruf",
    avatarSrc:
      "https://pbs.twimg.com/profile_images/1861312721943453696/bCHLxsG3_400x400.jpg",
    role: "Project Manager",
    company: "Tech Innovators",
  },
];

function Testimonial() {
  return (
    <section className="container mx-auto pt-10 pb-40 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6">
        Loved by developers <br /> and designers
      </h1>
      <p className="mb-6 bg-yellow-200">
        (soon... Probably. Just give them a minute.)
      </p>
      <p className="text-lg text-gray-700">
        I just didn't put dummy.{" "}
        <strong>Want you to try and be the one too?</strong> Wrtie a review.
      </p>

      <div className="w-4/5 mx-auto columns-1 space-y-4 gap-4 mt-12">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.username}
            avatarSrc={t.avatarSrc}
            name={t.name}
            username={t.username}
            content={
              <p>
                {t.quote.includes("lnkfr") ? (
                  <>
                    {t.quote.split("lnkfr")[0]}
                    <span className="text-[#1DA1F2]">@lnkfr</span>
                    {t.quote.split("lnkfr")[1]}
                  </>
                ) : (
                  t.quote
                )}
              </p>
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
