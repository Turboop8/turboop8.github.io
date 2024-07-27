import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import Link from './Link';

function Contact() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Contact" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          If you're interested in reaching out and want to chat, please just reach out via any of the links below!
        </Text>
      </Section>

      <Section>
        <Text className="text-lg">
          [<span className="text-pink">Email</span>] (<Link targetBlank href="mailto:turboop8@gmail.com">mailto:turboop8@gmail.com</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Github</span>] (<Link targetBlank href="https://github.com/Turboop8">https://github.com/Turboop8</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">QQ (For Chinese)</span>] (<Link targetBlank>3682184163</Link>)
        </Text>
      </Section>
    </div>
  )
}

export default Contact;
