import React from "react";
import { motion } from "framer-motion";
import { Education } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Education;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience?.schoolImage).url()}
        // src="/pme.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.school}</h4>
        <p className="font-bold text-gray-500 text-sm mt-1">
          {experience?.affiliation}
        </p>
        <div className="flex space-x-2 my-2">
          {/* <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          /> */}
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="w-10 h-10 rounded-full"
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Graduation Year: {experience?.year}
        </p>
        {/* <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            {experience.points.map((point: string, i: React.Key | null | undefined) => (
              <li key={i}>{point}</li>
            ))}
        </ul> */}
        {Array.isArray(experience?.points) && (
          <ul className="list-disc space-y-4 ml-5 text-lg">
            {experience.points.map(
              (point: string, i: React.Key | null | undefined) => (
                <li key={i}>{point}</li>
              )
            )}
          </ul>
        )}
      </div>
    </article>
  );
}
