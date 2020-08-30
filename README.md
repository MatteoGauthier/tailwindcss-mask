# tailwindcss-mask 😷

A plugin that provides mask css utility (mask-image for the moment).

[View live demo](https://tailwindcss-typography.netlify.app/)

```html
<img class="mask-image-simple" src="https://source.unsplash.com/random"/>
```

## Installation

```bash
yarn add tailwindcss-mask -D
```

## Usage
The masks configuration must be an object or a function returning an object.

```js
plugins: [
    require('tailwindcss-mask'),
],
```

<!-- - **class names:** `bg-` followed by the gradient key. E.g. `bg-topaz`.
- **type definitions:** Can be: `linear` (default), `radial`, `repeating-linear`, `repeating-radial`.
- **color definitions:** `Array` such that:
    - The first item defines the angle of the gradient. (optional)
    - The other items define the (unlimited) colors of the gradient. -->
