import { useEffect, useContext, useState } from 'react'
import {
  random,
  createQtGrid,
  randomBias
} from '@georgedoescode/generative-utils'
import { ThemeContext } from '../provider'
import { SVG } from '@svgdotjs/svg.js'
import NavBar from '../components/nav'
import Main from '../components/main'

export default function Home() {
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
            .attr('stroke-width', random(1, 2))
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
            .attr('stroke-width', random(1, 2))
        } else {
          svg
            .rect(area.width * random(0.25, 1), area.height * random(0.25, 1))
            .x(area.x)
            .y(area.y)
            .stroke('rgba(37, 75, 98, 1)')
            .fill('transparent')
            .attr('stroke-width', random(1, 2))
        }
      }
    })
  }

  useEffect(() => {
    generateSVG()
  }, [theme])

  return (
    <>
      <NavBar />
      <Main generate={generateSVG} />
    </>
  )
}
