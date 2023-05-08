import { sanityClient } from "@/sanity";
import { Education, Project } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "education"] {
      ...,
      technologies[]->
    }
`;

type Data = {
  experiences: Education[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Education[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
