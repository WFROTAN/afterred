import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'How much will it cost to design and develop my website?',
    content: () => (
      <>
        Each business's needs are different, so due to variations in scope,
        pricing from one web design to the next can be quite different. Our
        typical end-to-end website redesign costs $50,000-$100,000. If you have
        a well-defined scope, check out our website cost calculator for a more
        refined estimate. If you’d like a more detailed breakdown of the
        pricing, request a copy of our pricing sheet.
      </>
    ),
  },
  {
    title: 'How long does it take to build my website?',
    content: () => (
      <>
        Similar to questions regarding website cost, the timeline will vary
        greatly based on the scope of your web design project. Typically, our
        end-to-end build projects take 4-6 months to complete.
      </>
    ),
  },
  {
    title: 'What size and type of companies do you work with?',
    content: () => (
      <>
        We have an even balance of start-ups, small businesses, non-profits, and
        enterprise clients across a multitude of industries. To get a better
        sense of our wide range of web design projects, check out our client's
        list.
      </>
    ),
  },
  {
    title: 'Where is your team located?',
    content: () => (
      <>
        Our web design & development team is 100% based in the United States.
        Our headquarters is located in Pittsburgh, PA, and we have a satellite
        office located in New York, NY. We also have some remote employees in
        Utah, California, West Virginia, Colorado, and Florida.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
