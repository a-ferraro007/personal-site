import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../utils/mdx'

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post }
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => {
    console.log(slug)
    return {
      params: { slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default function Post({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <div>BLOG</div>
      <h1> {frontmatter.title}</h1>
      <Component />
    </>
  )
}
