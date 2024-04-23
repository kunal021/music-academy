"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import courses from "@/data/music.courses.json";

function FeaturedSection() {
  interface Courses {
    id: number;
    title: string;
    link: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  }
  const featuredCourses = courses.courses.filter(
    (course: Courses) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={featuredCourses} />
      </div>
      <div className="mt-16 text-center">
        <Link
          href={"/all-courses"}
          className="p-4 rounded-2xl border border-transparent text-white bg-black hover:bg-gray-950 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
