/** @type {import('next').NextConfig} */
import rehypePrettyCode from 'rehype-pretty-code'
import mdx from '@next/mdx'

/** @type {import('rehype-pretty-code').Options}*/
const options = {
  theme: 'one-dark-pro',
}

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com", "i.scdn.co"],
  },
  // compiler: {
  //   styledComponents: true
  // }
};

export default withMDX(nextConfig);
