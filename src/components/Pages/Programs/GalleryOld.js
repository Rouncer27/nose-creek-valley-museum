import React, { useRef, useState, useEffect, Component } from "react"
import { useTransition, animated as a, config } from "react-spring"
import useMeasure from "./useMeasure"
import useMedia from "./useMedia"
import shuffle from "lodash/shuffle"
import styled from "styled-components"

const StyledGallery = styled.div`
  .list {
    position: relative;
    width: 100%;
    margin: 10rem auto 5rem;
  }

  .list__item {
    position: absolute;
    will-change: transform, width, height, opacity;
    padding: 4rem;

    &--wrapper {
      position: relative;
      background-size: cover;
      background-position: center center;
      width: 100%;
      height: 100%;
      overflow: hidden;
      text-transform: uppercase;
      font-size: 10px;
      line-height: 1rem;
      border-radius: 4px;
      border: solid 1rem #c6c6c6;
      box-shadow: 0px 1rem 5rem -10rem rgba(0, 0, 0, 1);
    }
  }
`

const Gallery = props => {
  const data = props.images

  data.forEach(d => {
    d.height = (Math.floor(Math.random() * 6) + 4) * 100
    d.css = `url(${d.image.localFile.publicURL})`
  })

  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  )
  const [bind, { width }] = useMeasure()
  const [items, set] = useState(data)
  useEffect(() => void setInterval(() => set(shuffle), 10000), [])

  let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 }
  })

  const transitions = useTransition(gridItems, item => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  return (
    <StyledGallery>
      <div {...bind} className="list" style={{ height: Math.max(...heights) }}>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => {
          return (
            <a.div
              key={key}
              className="list__item"
              style={{
                transform: xy.interpolate(
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
                ...rest,
              }}
            >
              <div
                className="list__item--wrapper"
                style={{ backgroundImage: item.css }}
              />
            </a.div>
          )
        })}
      </div>
    </StyledGallery>
  )
}

export default Gallery
