"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Emily R.",
    company: "Lincoln High School",
    content:
      "SmartAssess has revolutionized how I grade. What used to take hours now takes minutes — and it’s more accurate, consistent, and aligned to our state standards.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    
    name: "Mr. Ahmed",
    company: "STEM Academy",
    content:
      "Differentiation was always a challenge, but SmartAssess made it automatic. Assignments adjust to student needs without me spending extra prep time.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
   
    name: "Lucia D.",
    company: "Evergreen Middle",
    content:
      "I can finally track student growth over time with clarity. The visual insights are game-changing — I know exactly who needs support and when.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    
    name: "Mr. Pavel",
    company: "Canon Elementary",
    content:
      "With built-in scaffolding and clear rubrics, even my struggling students feel supported. SmartAssess makes equity in education real, not just aspirational.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    
    name: "Miriam E.",
    company: "Bright Minds Charter",
    content:
      "My teaching team now has a shared, consistent way to assess student work. Collaboration is smoother, and feedback is more meaningful.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg06,
    
    name: "Luis V.",
    company: "Northlake Prep",
    content:
      "SmartAssess fits right into my routine — I don’t need extra training or tech skills. It just works, and it saves me hours each week.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    
    name: "Aisha M.",
    company: "Jefferson Elementary",
    content:
      "We deployed SmartAssess across the district and saw an immediate impact. Teachers love the time savings and data clarity.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg08,
   
    name: "Ravi T.",
    company: "Summit High",
    content:
      "Setup was fast, the interface is clean, and the value is obvious. We’ve finally found a grading tool that aligns with real classroom needs.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg09,
    
    name: "Ms. Lauren",
    company: "Maplewood High",
    content:
      "No more late nights grading stacks of papers. SmartAssess lets me focus on teaching while the platform handles the rest.",
    categories: [1, 2],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Don't take our word for it
          </h2>
          <p className="text-lg text-indigo-200/65">
          We provide AI-powered tools that help educators deliver fair, fast, and insightful assessments—building stronger classrooms from anywhere in the world.
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
             
              {/* Button #4 */}
              
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-indigo-200/65 transition-colors hover:text-indigo-500"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
