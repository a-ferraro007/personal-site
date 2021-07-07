import { useEffect, useContext } from 'react'
import {
  random,
  createQtGrid,
  randomBias
} from '@georgedoescode/generative-utils'
import { SVG } from '@svgdotjs/svg.js'
import NavBar from '../components/nav'
import Main from '../components/main'

export default function Home() {
  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight - 50
    const svg = SVG()
      .viewbox(0, 0, width, height)
      .size(width, height)
      .addTo('#svg')

    const focalPoint = {
      x: random(0, width),
      y: random(0, height)
    }
    const points = [...Array(200)].map(() => {
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
      gap: 1,
      maxQtLevels: 4
    })
    grid.areas.forEach((area, i) => {
      if (i % 2) {
        if (random(0, 1) > 0.5) {
          svg
            .circle(Math.min(area.width, area.height))
            .x(area.x)
            .y(area.y)
            .stroke('rgba(37, 75, 98, .75)')
            .fill('transparent')
        } else {
          svg
            .rect(area.width * 0.75, area.height * 0.75)
            .x(area.x)
            .y(area.y)
            .stroke('rgba(37, 75, 98, .75)')
            .fill('transparent')
        }
      }
    })
  }, [])

  return (
    <>
      <NavBar />
      <Main />
    </>
  )
}
