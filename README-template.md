# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

Desktop and mobile Screenshots are in the 'Screens' folder.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Downloaded course content and viewed all images
- Started breaking down projects into steps: Desktop page, Mobile page, DOM manipulation
- Researched similar projects to see how they were impleemented and things i could improve on
- Started building project by first implementing the desktop page.
- Once happy with destop design i moved on to implenting the JS, I conducted reserch on toggller buttons and event listeners.
- After JS part implemented and tested, i moved on to add the responsiveness.
- Upload to GIT and deploy on Netlify then upload solution to Codewell platform

### Built with

- Semantic HTML5 markup
- SCSS- Design and Responsiveness
- Flexbox - layout
- Mobile-first workflow
- JS- Adding toggle switch feature

### What I learned

This Project was useful to learn how to change the displayed HTMl content depending on the checked state of the toggler.
I also learnt how to implenet a toggler button using css.
I got a more improved of how the Before and After selectors work, which i sued to implement the patterns on the page.

I was pround of these pieces of code:

- To implement the patterns

```css
&::before {
    content: "";
    height: 658px;
    width: 375px;
    position: absolute;
    display: block;
    top: -6rem;
    left: 56rem;
    z-index: -1;
    background: url(/images/bg-top.svg) no-repeat;
  }

  //   background image
  &::after {
    content: "";
    bottom: 0;
    height: 304px;
    width: 353px;
    position: absolute;
    display: block;
    background: url(/images/bg-bottom.svg) no-repeat;
    z-index: -1;
  }
}
```

-To change the pricing dispalyed by setting an event listener to check the state of the toggler

```js
toggleSwitch.addEventListener("change", function () {
  // When checked it the switch will toglle over to the annual price and this if statemnt hides the monthly prices and displays the annual.
  if (this.checked) {
    monthlyPrice.forEach((price) => {
      price.style.display = "none";
    });
    annualPrice.forEach((price) => {
      price.style.display = "block";
    });
  }
  // Else stament does the oposite.
  else {
    monthlyPrice.forEach((price) => {
      price.style.display = "block";
    });
    annualPrice.forEach((price) => {
      price.style.display = "none";
    });
  }
```

### Continued development

- I want to improve on the Animation tarnsition when the prices are changed
- I want to learn more ways to change the prices when the toggler is checked.

## Author

- LinkedIN - [Muyiwa Areola](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/muyiwa99)
- Github - [@muyiwa99](https://github.com/muyiwa99)

## Acknowledgments

Thank you to Me for peservering and completing this challenge.
