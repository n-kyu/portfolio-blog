import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="projects" heading="Projetos" />
        <AboutSection sectionId="about" heading="Sobre mim" />
        <InterestsSection sectionId="skills" heading="Conhecimentos" />
        <ContactSection sectionId="contact" heading="Contato" />
      </Page>
    </>
  );
}
