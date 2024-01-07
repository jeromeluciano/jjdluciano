import Head from 'next/head'
import Layout from './main';
import "prismjs/themes/prism-tomorrow.css"
import { Box, Image } from '@chakra-ui/react';
import NextImage from 'next/image'
import Section from '../section';
import { useRouter } from 'next/router';

export default function WritingLayout({ children, meta }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>jjdluciano - {meta.title}</title>
      </Head>
      <Layout>
        <Section delay={0.6}>
          <button className='hover:underline mt-2 mb-2 text-sm' onClick={() => router.back()}>⬅ back</button>
          <h1 className='text-2xl font-bold mt-2 mb-2 text-yellow-50'>{meta.title}</h1>
          <div className='relative my-6'>{meta.cover ? <Image src={meta.cover} width="full" height="xs" rounded="3xl" />:null}</div>
          <p>{meta.date}</p>
          <div>{children}</div>
        </Section>
      </Layout>
    </>
  )
}
