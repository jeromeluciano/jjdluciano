import Layout from "../../components/layouts/main";
import {motion} from 'framer-motion';
import { Flex, VStack } from "@chakra-ui/react";
import WritingItem from '../../components/writing-item'
import Section from "../../components/section";
import {articles} from '../../content/writings'
;
import WritingItemList from "../../components/writings-item-list";
export default function WritingsPage() {
  const writings = WritingItemList({ writings: articles })

  return <Layout>
    <Section delay={0.9}>
      <h1 className="text-lg font-bold my-4">Writings</h1>
      <VStack spacing={8}>
        {writings}
      </VStack>
    </Section>
  </Layout>
}
