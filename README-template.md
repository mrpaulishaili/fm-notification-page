# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [GitHub](https://your-solution-url.com)
- Live Site URL: [GitHub Pages](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In taking this challenge, I have been able to learn and understand quite a number of things regarding web development. Among these are:

- Using mixins and including a mixin in another mixin in SCSS. For instance,

```scss
@mixin flex {
  display: flex;
}

@mixin flexColumn {
  @include flex();
  flex-direction: column;
}

@mixin flexCenter {
  @include flex();
  justify-content: center;
  align-items: center;
}
```

- Using mixin in CSS properties. Like this:

```scss
.badge {
  border-radius: 0.25rem;
  background-color: var(--blue);
  color: var(--white);
  font-size: 1rem;
  height: 1.8rem;
  width: 2.5rem;
  @include flexCenter();
}
```

- Using local fonts in a project. This drastically reduces the amount of byte spent on reload as fonts are stored in client's local cache for reuse. This also enable font consistency among screens as to how the website is designed.

- Using multiple properties in transition. As in my code:

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

### Continued development

I am looking deeper to understanding the implementations of functions in SCSS and loops. This will definitely be an interesting dive and ease developement processs to deliver faster and better.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Paul ISHAILI C.](https:/mrpaulishaili.github.io)
- Frontend Mentor - [@mrpaulishaili](https://www.frontendmentor.io/profile/mrpaulishaili)
- Twitter - [@mrpaulishaili](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

I do acknowledge an extend my deepest gratitude to the entire team @Frontend Mentors behind this projet. This is indeed giving me consistency and a platform to express my know-how in web-development.
