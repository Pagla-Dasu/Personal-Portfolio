import Head from "next/head";
// import { Inter } from "next/font/google";
import { GetStaticProps, NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Education, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchSkills  } from "@/utils/fetchSkills";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import exp from "constants";

type Props = {
  pageInfo: PageInfo;
  experiences: Education[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

// export default function Home({pageInfo,experience,skills,projects,socials}: Props) 
const Home = ({pageInfo,experiences,skills,projects,socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-md scrollbar-track-rounded">
      <Head>
        <title>PaglaDasu | Full Stack</title>
      </Head>

      {/* Header */}
      <Header socials={socials}/>

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo}/>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-6 w-6 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/pme.jpg" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Home

export let getStaticProps = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiences: Education[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  }
}
