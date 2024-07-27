import React from 'react';
import MarkdownHeader from '../MarkdownHeader';
import Section from '../Section';
import Comment from '../Comment';
import Text from '../Text';
import MarkdownButton from '../MarkdownButton';

function NonPublicProjectText({ title, technologies, description }) {
  return (
    <Section className="max-w-[450px]">
        <MarkdownHeader headingLevel="2" text={title} className="text-xl md:text-3xl mb-3" />
      <Comment>{technologies}</Comment>
      <Text>{description}</Text>
      <div className="flex">
          <MarkdownButton as="a" target="_blank" rel="noreferrer" className="text-red">
            [Project Unavailable (Non-public Project)]
          </MarkdownButton>
      </div>
    </Section>
  );
}

export default NonPublicProjectText;
