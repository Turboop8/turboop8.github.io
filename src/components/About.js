import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import Comment from './Comment';
import { projects, contact } from '../utils/directory'
import TabLink from './TabLink';

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My nickname is Turboop8. I am a Minecraft developer, currently in the first year of senior high.</Text>
        <Text>I started coding as a hobby through 2021 and from that point on, I was hooked. Since then I have been learning and building every opportunity I get. To see my recent projects, see <TabLink className="font-bold text-yellow" tab={projects}>Projects.js</TabLink>.</Text>
        <Text>I'm currently working on Tempest, a next generation Minecraft proxy server software that we use internally. But I don’t know much about the Minecraft protocol at the moment, but I will continue to study it until I crack it!</Text>
        <Text>For information on contacting me, see <TabLink className="font-bold text-yellow" tab={contact}>Contact.md</TabLink>.</Text>
      </Section>

      <Section>
        <MarkdownHeader headingLevel="2" text="Technologies" className="text-xl md:text-3xl" />
        <LineBreak />
        <Comment>
          While these are some of the languages I am the most comfortable with, I am constantly looking to expand my toolkit and am open to working with and learning new skills!
        </Comment>
        <Text>
          <span className="font-bold text-blue">Languages:</span> Java, Kotlin, HTML, JavaScript, CSS, Golang, MongoDB, MySQL, XML, Markdown, JSON, YAML
        </Text>
        <Text>
          <span className="font-bold text-blue">Tools:</span> Git, Docker
        </Text>
      </Section>
    </div>
  )
}

export default About;
