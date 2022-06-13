import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
    emoji: "📚"
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
    emoji: "💻"
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
    emoji: "💡"
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
    emoji: "👀"
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
    emoji: "📦"
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
    emoji: "🌐"
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex space-x-6">
        <StaticImage
          className="mb-4"
          src="../images/icon.png"
          loading="lazy"
          alt="Gatsby logo"
          height={50}
          quality={95}
          formats={["auto", "webp", "avif"]}
        />
        <StaticImage
          className="mb-4"
          src="../images/tailwind.png"
          loading="lazy"
          alt="Gatsby logo"
          height={50}
          quality={95}
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <header className="flex flex-col space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          <a className="text-purple-700 hover:text-purple-600" href="https://www.gatsbyjs.com" target="_blank" rel="noopener norefferer">Gatsby</a>
          {' + '}
          <a className="text-purple-700 hover:text-purple-600" href="https://tailwindcss.com/" target="_blank" rel="noopener norefferer">TailwindCSS</a> starter
        </h1>
        <span>Edit <code className="bg-purple-200 px-2 py-1 rounded-sm text-purple-800">src/pages/index.js</code> to change this page.</span>
      </header>

      <div className="grid gap-8 md:grid-cols-2 mt-12 max-w-4xl text-left">
        {links.map(({ text, url, description, badge, color, emoji }) => (
          <a
            key={url}
            className="flex flex-col space-y-2 border border-slate-200 p-6 rounded-lg hover:border-purple-500 hover:shadow-sm transition-all"
            href={url}
            target="_blank"
            rel="noopener norefferer"
          >
            <h2 className={`text-2xl font-bold ${badge ? `flex items-center` : ``}`} style={{ color: `${color}` }}>
              {text} {` `} {emoji}
              {badge && <span className="bg-purple-200 ml-3 px-2 rounded-sm text-purple-800 text-[10px] uppercase">New</span>}
            </h2>
            <span className="text-gray-600">{description}</span>
          </a>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
