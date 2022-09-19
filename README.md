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

![Desktop](https://github.com/mrpaulishaili/fm-notification-page/blob/main/assets/images/desktop.jpg)

![Mobile](https://github.com/mrpaulishaili/fm-notification-page/blob/main/assets/images/mobile.jpg)

![Hover / Active](https://github.com/mrpaulishaili/fm-notification-page/blob/main/assets/images/active-state.jpg)

![All Messages Read](https://github.com/mrpaulishaili/fm-notification-page/blob/main/assets/images/all-messages-read.jpg)

### Links

- Solution URL: [GitHub](https://github.com/fm-notification-page)
- Live Site URL: [GitHub Pages](https://mrpaulishaili.github.io/fm-notification-page/)

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
  @include flexCenter();
}
```

- Using local fonts in a project. This reduces the amount of byte spent on reload as fonts are stored in client's local cache for reuse. This also enable font consistency among screens as to how the website is designed.

- Using multiple properties in transition. As in my code:

```scss
transition: background-color, border-color, scale 0.2s ease-in-out;
```

### Continued development

I am looking deeper to understanding the implementations of functions in SCSS and loops. This will definitely be an interesting dive and ease developement processs to deliver faster and better.

### Useful resources

- [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts/plus-jakarta-sans?subsets=latin) - This helped me generate google fonts for local use.

- [CSS Transition Properties](https://www.freecodecamp.org/news/css-transitions-explained-d67ab9a02049/#:~:text=Transitioning%20two%20or%20more%20properties,to%20specify%20one%20of%20them.) -This assisted me in understanding how to target multiple properties in css transition.

## Author

- Website - [Paul ISHAILI C.](https:/mrpaulishaili.github.io)
- Frontend Mentor - [@mrpaulishaili](https://www.frontendmentor.io/profile/mrpaulishaili)
- Twitter - [@mrpaulishaili](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

I do acknowledge an extend my deepest gratitude to the entire team @Frontend Mentors behind this projet. This is indeed giving me consistency and a platform to express my know-how in web-development.
