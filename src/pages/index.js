import React from "react"
import useMatchMedia from "../useMatchMedia.js"
import "../styles.css"

export default () => {
  const isLarge = useMatchMedia("(min-width: 600px)")

  const sizeClass = isLarge ? "container--large" : "container--small"

  console.log(sizeClass)

  return (
    <div className={`container ${sizeClass}`}>
      {isLarge
        ? "CONTAINER--LARGE! (should be blue)"
        : "container--small (should be green)"}
    </div>
  )
}
