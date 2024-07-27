import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Text from './Text';
import Section from './Section';
import Link from './Link';
import Project from './projects/Project';
import ProjectText from './projects/ProjectText';
import ProjectPreview from './projects/ProjectPreview';
import tempestPrev from '../assets/images/projects/tempest.png';
import NonPublicProjectText from "./projects/NonPublicProjectText";
import UnmaintainedProjectText from "./projects/UnmaintainedProjectText";

function Projects() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Personal Projects" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
            Below is a selection of some recent projects that I have worked on. For more detail on everything that I have done, as well as what I am currently working on, check out my GitHub at <Link targetBlank href="https://github.com/Turboop8/">https://github.com/Turboop8/</Link>
        </Text>
      </Section>

      <Section>
        <Project>
          <NonPublicProjectText
            title="Tempest"
            technologies="Java"
            description="A next-generation Minecraft proxy software for our internal project. This project is used in most of our Minecraft proxy plugins."
          />
          <ProjectPreview src={tempestPrev} alt="logo of tempest" />
        </Project>
      </Section>

        <Section>
            <Project>
                <ProjectText
                    title="Cavern"
                    technologies="Java"
                    description="A collection of core Java utilities."
                    githubLink="https://github.com/Turboop8/cavern/"
                />
            </Project>
        </Section>

        <Section>
            <Project>
                <NonPublicProjectText
                    title="DataGo"
                    technologies="Java"
                    description="A database utilities collection of Java."
                />
            </Project>
        </Section>

        <Section>
            <Project>
                <UnmaintainedProjectText
                    title="SlimeProxy"
                    technologies="Java"
                    description="Proxy server tailor-made for Vortex Network"
                />
            </Project>
        </Section>
    </div>
  )
}

export default Projects;
