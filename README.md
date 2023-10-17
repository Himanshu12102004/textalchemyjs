# textalchemyjs

textalchemyjs is a frontend JavaScript library for creating text animation effects, perfect for adding dynamic and eye-catching text animations to your web projects. With textalchemyjs, you can reveal and transform text in a variety of ways, making your content more engaging and interactive.

## Features

- **Text Reveal:** Easily create text reveal animations with customizable options.

- **Multiple Animations:** Choose from a range of text animation styles to suit your design.

- **Simple Integration:** Seamless integration into your web projects with a straightforward API.

  <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

## How to use

**In react project:**

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
        visibleTime: 600, // default: 500ms
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
