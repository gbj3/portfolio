import { Github, Linkedin, Send, Download } from "lucide-react";
import ProfilePicture from "@/components/images/suit.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div id="body" className="flex flex-col text-center items-center min-h-screen bg-[#797d7f] bg-opacity-80 lg:flex-row font-mono">
      <aside className="flex w-full items-center justify-center lg:sticky lg:inset-y-0 lg:h-screen lg:overflow-hidden sm:h-auto sm:overflow-y-auto">
        <div id="aside-content" className="w-full items-center justify-center text-center">
          <Image src={ProfilePicture} alt="Profile Picture" className="rounded-full size-64 justify-center mx-auto"/>
          <h1>Gabriel Jastrzebski</h1>
          <h2>Web Developer</h2>
          <div id="links" className="flex flex-row gap-4 items-center justify-center">
            <Link target='_blank' href='https://www.github.com/gbj3' className="hover:animate-grow"><Github /></Link>
            <Link target='_blank' href='https://www.linkedin.com/in/gabriel-jastrzebski/' className="hover:animate-grow"><Linkedin /></Link>
            <Link href='mailto:gbj3@njit.edu' className="hover:animate-grow"><Send /></Link>
            <a href='Resume.pdf' className="hover:animate-grow"><Download /></a>
          </div>
        </div>
      </aside>
      <main className="w-full">
        <div id="main" className="w-full lg:text-start py-12 lg:w-4/5">
          <div className="pb-6">
            <h3>About</h3>
            <p>I am an NJIT alumnus where I earned an IT degree concentrated in Web Development with
                a minor in Business, graduating Summa Cum Laude in 3.5 years. Now, I am looking to expand
                my knowledge in a full time position under the guidance of industry professionals.</p>
          </div>
          <div className="pb-6">
            <h3>Experience</h3>
            <h4>Full Stack Developer, NJDOH - 2024</h4>
            <p className="pb-2">I was a software engineer intern for the NJ Department of Health where I built a full 
              stack web application during my tenure. The product was designed as an internal tool for insights 
              into the sequencing data related to COVID-19 and I gave two presentation to key stake holders regarding its 
              uses.</p>
            <h4>Full Stack Developer, RDE Systems Support - 2024</h4>
            <p>As part of my Senior Capstone I was part of a Scrum team that visualized statistics
              regarding Influenza vaccination data.</p>
          </div>
          <div className="pb-12">
            <h3>Projects</h3>
            <h4>COVID-19 Dashboard, Fall 2024</h4>
            <h4>Influenza Data Visualizer, Fall 2024</h4>
            <h4>React Movie Website, Spring 2024</h4>
            <h4>PHP Movie Website, Spring 2024</h4>
            <h4>Java Chatroom, Spring 2023</h4>
            <h4>COVID-19 Dashboard, Fall 2024</h4>
            <h4>Influenza Data Visualizer, Fall 2024</h4>
            <h4>React Movie Website, Spring 2024</h4>
            <h4>PHP Movie Website, Spring 2024</h4>
            <h4>Java Chatroom, Spring 2023</h4>
            <h4>COVID-19 Dashboard, Fall 2024</h4>
            <h4>Influenza Data Visualizer, Fall 2024</h4>
            <h4>React Movie Website, Spring 2024</h4>
            <h4>PHP Movie Website, Spring 2024</h4>
            <h4>Java Chatroom, Spring 2023</h4>
          </div>
        </div>
      </main>
    </div>
  );
}
