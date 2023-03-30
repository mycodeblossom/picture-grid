# PictureGridDs

This project is based on the [requirements  document](requirements.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Requirements

1. **Load the data from this API endpoint - https://jsonplaceholder.typicode.com/photos** 

   Use parameters `_start` and` _limit` to load partial results. 

2. **Sort the images on their red color value, from small to big. Take the color value from the
   image url - i.e. for "https://via.placeholder.com/600/92c952", the color will be "92c952".** 
   
   Some of the colors in the URLs are with less than 6 characters. For such cases, the color is transformed to 6 characters. 
   
   Possible improvements are:
   
   * validation for allowed hex characters
   * validation for the number of characters (in this version the managed number is from 3 to 6)


3. **Display the images dynamically with JS, using the larger resolution images (“url” field) if the
   page is loaded on desktop and the smaller ones (“thumbnailUrl” field) on mobile.** 

   For determining if the device is mobile or not is used [ngx-device-detector](https://www.npmjs.com/package/ngx-device-detector). If it is mobile - the thumbnail URL is loaded, else - the URL.

4. **Overlay the image title ("title" field) on top of the corresponding image using a contrasting
   color (white on darker images, black on lighter ones).**

   Dark and light colors are distinguished using HSP (Hue, Saturation & Perceived Brightness). The value is calculated using RGB model with the following formula:

   ```
   √(.299r² + .587g² + .114b²)
   ```

   The color is considered "light" is the value is greater than 127.5 and dark otherwise.

   The reason to chose this formula is research in Internet and multiple tests with the images from the API. Some details can be found here: http://alienryderflex.com/hsp.html
   
5. **Display the first 30 images “on load” and include a “show more” button at the bottom of the
   page that will display another 30 images each time it is clicked.**

   Before first load - only the title and the button are shown. The button is disabled until the server returns response. If the server returns error - the button is enabled to allow new request.

   Each time the user request more images - the new portion of images is appended to the already loaded ones and the list is sorted by red value. 
   
   If there are no more results, the button "Show more" is disabled.
   
6. **Show them in a responsive grid on the webpage - fit maximum number of images in a row
   and make them go to the next row when the window is resized.**

   Different solution is provided for browsers that support grid and browsers that don't support it.

7. **(Optional) add a search field to the top of the page that allows you to filter the image list
   based on text contained in the image title.**

   Search field is placed in the top part of the page. The image list is filtered on every key stroke and the filtered list is displayed.


## Demo

https://image-grid-ds.firebaseapp.com/

## Third party libraries

* [ngx-device-detector](https://www.npmjs.com/package/ngx-device-detector) : used to determine if the device is mobile or not

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Angular CLI version 
`nvm use  12.14.1`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
