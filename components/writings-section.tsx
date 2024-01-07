import { VStack } from '@chakra-ui/react';
import Section from './section'
import SectionTitle from './section-title';
import WritingItem from './writing-item';
import {articles} from '../content/writings'
import WritingItemList from './writings-item-list';

export default function WritingsSection() {
  const writings = WritingItemList({writings: articles})
  return (
    <Section className="mt-6" delay={0.9}>
      <SectionTitle title="✍🏻 Writings"/>
      <VStack mt={4} spacing={6}>
        {writings}
      </VStack>
    </Section>
  );
}
