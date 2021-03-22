# Kiuss art-group's website portfolio

![](https://stranno.su/design.png)

Stack: HTML5, CSS3, Nuxt.js, jQuery

## About the art-group

Kiuss Group was formed in 2012 and is based in Krasnodar. The main areas of interest are street activities, neosuprematism and screen painting. The founders of the cultural center “The Mansion of Culture” and the gallery “The High of Culture”, developers of web-application for psychogeography research “Dérive”, the authors of the essay “Instructions for Semiotics”.

## Project implementation

The project is a SPA-application with SSR, each individual project is implemented as a single file vue-component. The main task is to make images of the maximum size, as well as hide all elements of the interface, because 90% of the content of the site will be image galleries.

Features:

- custom scroll-bar
- use of the current-device js-library to determine the device type for more precise adjustment of media-queries
- bilingualism (languages are switched with animation by pressing the button, i.e. no need to switch to a separate subdomain)
- emphasis on the secondary nature of the interface elements and the highlighting of images
- separate mobile version
- lazyload
- component routing
- splitting the js-code into chunks, each of which is tightened only when necessary (as a consequence, markup, styles, images and texts are also tightened as necessary)
- each "post" on the page is pulled up from the json-data of the GET-request (with the help of vue-resource plugin)
