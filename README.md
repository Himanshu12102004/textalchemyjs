# textalchemyjs

textalchemyjs is a frontend JavaScript library for creating text animation effects, perfect for adding dynamic and eye-catching text animations to your web projects. With textalchemyjs, you can reveal and transform text in a variety of ways, making your content more engaging and interactive.

## Features

- **Text Reveal:** Easily create text reveal animations with customizable options.

- **Multiple Animations:** Choose from a range of text animation styles to suit your design.

- **Simple Integration:** Seamless integration into your web projects with a straightforward API.

## How to use

- **In react project:**

You can install textalchemyjs via npm:

```bash
npm  install  textalchemyjs
```

After installing it you can use it in your react project just by using the script below

```javascript
import React, { useRef, useEffect } from "react";
import textAlchemy from "textalchemyjs";

function Component() {
  const textAlchemyRef = useRef();

  useEffect(() => {
    const alchemyText = new textAlchemy.TextReveal(
      textAlchemyRef.current,
      ["textalchemy", "textreveal", "animation"],
      {
        stepCount: 3, // default: 2
        stepDelay: 40, // default: 20ms
        visibleTime: 700, // default: 500ms
        loop: true, // default: false
      }
    );

    alchemyText.animate();
  }, []);

  return (
    <>
      <span style={{ textAlign: "left" }} ref={textAlchemyRef}></span>
    </>
  );
}

export default Component;
```

- **In HTML, CSS and js projects:**
  In simple html, css and js pages you can use textalchemyjs in two ways-
  Follow the steps below to get started with textalchemyjs

**1.) Using CDN :**

- Include the CDN link below in the `<head></head>` tag of your html file.

```html
<script src="https://cdn.jsdelivr.net/npm/textalchemyjs@1.0.0/dist/textAlchemy.js"></script>
```

- Make a `<span id="words"></span>` in your html file where you want the text animation.
- Include the code below in your `script.js` file

```javascript
const text = new textAlchemy.TextReveal(
  document.querySelector("#words"),
  ["Web Developer", "Game Developer", "textalchemy lover"],
  {
    stepDelay: 20, //default: 20ms
    visibleTime: 700, // default: 500ms
    loop: true, // default:false
    stepCount: 1, //default: 2
  }
);
text.animate();
```

- Include the css below in your `style.css` file.

```css
#words {
  font-family: monospace;
  font-size: 30px;
}
```

- You can directly copy the html below to see the animation

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>textalchemyjs</title>
    <style>
      #words,
      span {
        font-family: monospace;
        font-size: 30px;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/textalchemyjs@1.0.0/dist/textAlchemy.js"></script>
  </head>
  <body>
    <span>I am a </span>
    <span id="words"></span>
  </body>

  <script>
    const text = new textAlchemy.TextReveal(
      document.querySelector("#words"),
      ["Web Developer", "Game Developer", "textalchemy lover"],
      {
        stepDelay: 20,
        visibleTime: 700,
        loop: true,
        stepCount: 1,
      }
    );
    text.animate();
  </script>
</html>
```

**2.) Using ES6 Modules:**

- Make a `<span id="words"></span>` in your html file where you want the text animation.
- Include the code below in your `script.js` file in the html
  By using the script tag and

```html
<script type="module" src="./script.js"></script>
```

- And include the javaScript code below in your script.js file

```javascript
import textAlchemy from "https://cdn.jsdelivr.net/npm/textalchemyjs@1.0.0/dist/textAlchemy.mjs";
const text = new textAlchemy.TextReveal(
  document.querySelector("#words"),
  ["Web Developer", "Game Developer", "textalchemy lover"],
  {
    stepDelay: 20, //default: 20ms
    visibleTime: 700, // default: 500ms
    loop: true, // default:false
    stepCount: 1, //default: 2
  }
);
text.animate();
```

- Include the css below in your `style.css` file.

```css
#words {
  font-family: monospace;
  font-size: 30px;
}
```

**Please contribute to my library**
