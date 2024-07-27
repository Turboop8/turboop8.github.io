import React from 'react';
import Section from './Section';
import Text from './Text';
import { about, projects, contact } from '../utils/directory'
import LineBreak from './LineBreak';
import TabLink from './TabLink';
import Link from './Link';

function Home() {
  return (
    <div>
      <Section>
        <h1 className="text-5xl mb-3">
          <span className="text-blue">#</span> Hi! I'm <span className="text-yellow">Turboop8</span>!
        </h1>
        <h2 className='text-3xl'>
          <span className="text-blue">##</span> A Minecraft developer from China.
          <span className="animate-blink">|</span>
        </h2>
        <LineBreak />
      </Section>

      <Section>
        <Text>
          Experienced using Java, Kotlin, JavaScript, Golang, and more!
        </Text>
        <Text>
          {/*This website, inspired by <Link targetBlank href="https://code.visualstudio.com/">VS Code</Link>, is an interactive overview of who I am and some the things that I've built. I encourage visitors to click around and explore (the sidebar and tabs at the top are fully functioning).*/}
          As of 2024, I have been developing Minecraft for over 3 years, developed numerous server plugins, and am currently developing the Tempest proxy server software.
        </Text>
        <Text>
          I have also participated in many projects, such as PaperMC's Velocity.
        </Text>
        <Text>
          To learn more about me, please check out the <span className="font-bold">Helpful Links</span> below!
        </Text>
      </Section>
      
      <Section className="space-y-2">
        <h3 className="text-2xl font-bold mb-3">
          <span className="text-blue">##</span> Helpful Links
        </h3>
        <div>
        <TabLink tab={about} className="text-yellow font-bold">About Me</TabLink>
          <span className="ml-5">~/further_information</span>
        </div>
        <div>
          <TabLink tab={projects} className="text-yellow font-bold">My Projects</TabLink>
          <span className="ml-5">~/my_works</span>
        </div>
        <div>
          <TabLink tab={contact} className="text-yellow font-bold">Contact</TabLink>
          <span className="ml-5">~/lets_chat</span>
        </div>
      </Section>
    </div>
  )
}

export default Home;
