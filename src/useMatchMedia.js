import { useState, useEffect } from "react"

/**
 * useMatchMedia
 *
 * usage:
 *   const matches = useMatchMedia("(min-width: 900px)")
 *   matches will be true or false
 *
 * the format of the string is important, eg, needs ()'s
 * see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * @param  {String} media : media query to match
 * @return {Boolean} true if it matches, false if it doesn't
 */
export default function useMatchMedia(media) {
  // checking if window exists for server rendering
  const mediaQueryList =
    typeof window !== "undefined" ? window.matchMedia(media) : {}

  const [matches, setMatches] = useState(mediaQueryList.matches)

  console.log("useMatchMedia matches", matches)

  // add listener
  useEffect(() => {
    const handleMatchChange = event => setMatches(event.matches)

    setMatches(window.matchMedia(media).matches)
    mediaQueryList.addListener(handleMatchChange)

    return () => {
      mediaQueryList.removeListener(handleMatchChange)
    }
  }, [matches, media, mediaQueryList])

  return matches
}
