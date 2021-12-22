/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const withImages = require('next-images')

module.exports = withImages(withMDX({
  pageExtensions: ['md', 'mdx', 'tsx', 'ts'],
}))