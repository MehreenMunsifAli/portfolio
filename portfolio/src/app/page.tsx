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
  );
}
