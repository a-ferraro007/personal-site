import { getAllPosts } from '../../utils/mdx'
import { useEffect, useContext } from 'react'
import {
  random,
  createQtGrid,
  randomBias
} from '@georgedoescode/generative-utils'
import { ThemeContext } from '../../provider'
import { SVG } from '@svgdotjs/svg.js'
import NavBar from '../../components/nav'

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts }
  }
}

export default function Blogs({ posts }) {
  const theme = useContext(ThemeContext)
  //const [fillColor, setFillColor] = useState()

  const generateSVG = () => {
    const oldSvg = document.querySelector('#svg').querySelector('svg')
    if (oldSvg) {
      oldSvg.remove()
    }

    const width = window.innerWidth
    const height = window.innerHeight //Full innerheight is causing scroll. idk why
    const svg = SVG()
      .viewbox(0, 0, width, height)
      .size('100vw', height)
      .addTo('#svg')
      .attr('preserveAspectRatio', 'xMidYMid slice')

    const focalPoint = {
      x: random(0, width),
      y: random(0, height)
    }
    const points = [...Array(300)].map(() => {
      return {
        x: randomBias(0, width, focalPoint.x),
        y: randomBias(0, height, focalPoint.y),
        width: 1,
        height: 1
      }
    })
    const grid = createQtGrid({
      width,
      height,
      points,
      gap: 0,
      maxQtLevels: 4
    })
    grid.areas.forEach((area, i) => {
      if (i % 2) {
        const rand = random(0, 1)
        if (rand > 0.25 && rand < 0.5) {
          svg
            .circle(Math.min(area.width, area.height))
            .x(area.x)
            .y(area.y)
            .stroke('rgba(37, 75, 98, 1)')
            .fill('transparent')
            .attr('stroke-width', random(1, 2.5))
        } else if (rand > 0.5 && rand < 1) {
          svg
            .polygon([
              area.width,
              area.height,
              area.width + random(20, 50),
              area.height - random(20, 50),
              area.width + random(20, 50),
              area.height + random(20, 50)
            ])
            .x(area.x)
            .y(area.y)
            .stroke('rgba(37, 75, 98, 1)')
            .fill('transparent')
            .attr('stroke-width', random(1, 2.5))
        } else {
          svg
            .rect(area.width * random(0.25, 1), area.height * random(0.25, 1))
            .x(area.x)
            .y(area.y)
            .stroke('rgba(37, 75, 98, 1)')
            .fill('transparent')
            .attr('stroke-width', random(1, 2.5))
        }
      }
    })
  }

  useEffect(() => {
    generateSVG()
  }, [theme])

  console.log(posts)
  return (
    <>
      <div id="svg" className="top-0 left-0 absolute" style={{ zIndex: -1 }}>
        {' '}
      </div>
      <div>
        <style jsx global>{`
          body {
            overflow-y: auto !important;
          }
        `}</style>
        <NavBar />
        <div className="flex flex-col items-center ">
          <div className="flex flex-col w-550  items-center mb-14">
            <h1 className="text-4xl font-semibold font-display text-primary-text dark:text-dark-mode-text lg:text-64 lg:mb-3">
              {' '}
              Blogs{' '}
            </h1>
            <p className="mt-4  font-mediumtext-xl font-display dark:text-dark-mode-text text-primary-text text-center">
              {' '}
              This is an early stage blog built with Next.JS, mdx, and the
              mdx-bundler. I currently don't have any blog posts, i'll probably
              just write about my plants or something.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Loop over all blog posts and pass props to a blog card component */}

            {/*<div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>
            <div className="w-72 h-52 border-2 border-red-200"></div>*/}
          </div>
        </div>
      </div>
    </>
  )
}
