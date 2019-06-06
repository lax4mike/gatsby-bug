## Gatsby bug

New `className`s are not being applied on the client after a server render.

Live version http://mikelambert.me/gatsby-bug/

https://github.com/gatsbyjs/gatsby/issues/14601

### Correct behavior when developing

1. Run `gatsby develop`
1. Open http://localhost:8000 in a browser wider than 600px.
1. Notice that the background is _blue_ and the text reads _CONTAINER--LARGE (should be blue)_.
1. Resize the browser to less than 600px and notice that the background is now green and the text reads _container--small (should be green)_.
1. 👍🏻

### Wrong behavior for production

1. Run `gatsby build && gatsby serve`
1. Open http://localhost:9000 in a browser wider than 600px.
1. Notice that the background is _green_ (wrong) and the text reads _CONTAINER--LARGE (should be blue)_.
   - The text was server rendered as _container--small (should be green)_ (view source to see), and is **correctly** being updated to _CONTAINER--LARGE (should be blue)_
   - The color/class is **incorrect**! The incorrect `className` of `container--small` is in the DOM. However, notice the **correct** `className` of `container--large` is logged to the console.
1. 👎🏻
1. Resize the browser back up to more than 600px and notice that the background is now blue and the text reads _CONTAINER--LARGE (should be blue)_ (correct, back in sync).
