"use client";

import { motion } from 'framer-motion';
import AboutComponent from "@/components/About";
import ContactComponent from "@/components/Contact";
import HeroComponent from "@/components/Hero";
import ProjectsComponent from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import ExperienceComponent from '@/components/Experience';

export default function Home() {
  return (
    // <div className="min-h-screen">
    //   <HeroComponent />
    //   <AboutComponent />
    //   <SkillsComponent />
    //   <ProjectsComponent />
    //   <ContactComponent />
    // </div>
    <motion.div
      className="min-h-screen w-full bg-orange-200"
      animate={{ backgroundColor: ['#ffffff', '#8fc9bb', '#ffffff'] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
       <HeroComponent />
       <AboutComponent />
       <SkillsComponent />
       <ProjectsComponent />
       <ExperienceComponent />
       <ContactComponent />
    </motion.div>


    // <motion.div
    //   initial={{ y: -100, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ type: 'fall', stiffness: 50 }}
    //   className=" flex items-center justify-center bg-gradient-to-b from-white via-orange-300 via-80% to-white to-20%"
    // >
    //   <div>
    //   <HeroComponent />
    //   <AboutComponent />
    //   <SkillsComponent />
    //   <ProjectsComponent />
    //   <ContactComponent />
    //   </div>
    // </motion.div>
  );
}
