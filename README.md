# Hot Sauce App
 
## URLs
- [Staging] (https://jolly-noyce-53ff3d.netlify.app/)
 
## Environment
* [npm](https://www.npmjs.com/features?gclid=Cj0KCQiAi7XQBRDnARIsANeLIeu5j3pDVzQq5zmYrhf-OP5XJoSLq0BjIBVsAWnGXVQOYBMPRu1yZCcaAoj1EALw_wcB)
* [SASS](https://github.com/sass/sass)
* [Reactjs](https://reactjs.org/)
 
### Build Setup
 
```bash
# clone repo
$ git clone https://github.com/Penssake/hot-sauce-app.git
 
# change directories
$ cd into directory hot-sauce-app
 
# install dependencies
$ npm install
(or)
$ yarn install
 
# serve with hot reload at localhost:3000
$ npm run start
(or)
$ yarn run start
 
# build for production and launch server
$ npm run build
(or)
$ yarn run build
 
```
<br>
 
***
### Styles
 
- **Sass preprocessor** enabled
- Basic setup for **core styles** in `/styles/main.scss`, including custom normalize.
- **Abstract sass utilities** (variables, mixins, functions) are imported globally via style resources, giving you access to sass variables etc.
- **Media queries**: defined as `styles/mixins.scss` in `/styles/abstracts/_variables.scss`. \
  Usage: \
  `@mixin respond($breakpoint) { ... }`, \
- **Typography**: see `styles/_typography.scss`
 
### Other
 
### Design choices made
 
- Simplistic card design with a shadow added to the hot sauce bottles and smaller back highlight div to create depth and texture. This to me, enhanced the purpose of the site, showcasing a product.
 
- Simplistic card design with a shadow added to the hot sauce bottles and smaller back highlight div to create depth and texture. This to me, enhanced the purpose of the site, showcasing a product.
 
- Unity of elements. For the icons and buttons, the styles are similar or exact to create a natural alignment of visual elements.
 
- For the colors, I extracted a color palette from the bottles using a color picker tool. Since the images themselves are bright, I chose a darker theme in order to not overwhelm the product.
 
- Design for desktop landing pages was done initially in illustrator. see `wireframes/desktop.png`
 
### Development
 
- For hover effects on the buttons and icons I chose simple transitions of color or scale to compliment the design.
 
- For the product, I chose to rotate the bottle back and forth a couple degrees in order to give the appearance of shaking. I personally always shake my hot sauce before use.
 
- For routing, I've added a route for each hot sauce using their id and passing props through the route.
``` path='/product/:id ```
 
- For responsiveness, I've used a media query manager mixin.
