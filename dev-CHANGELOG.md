# Wellmade Motors Calibration Frontend Development Changelog
All notable development changes to this project will be documented in this file. Dates are displayed in UTC +8.


### v23.4.24a
> April 24, 2023
- Removed attribute `data-table` in child of a grand-parent element that has already that attribute.

### v23.4.22a
> April 22, 2023
- Rename variable function argument name from `table_body_name` to `table_name`.
- Fixed empty message on table not working properly.
- Fixed table head checkbox not working properly.

### v23.4.21b
> April 21, 2023
- Renamed the javascript from `map-select.js` to `script.js`.
- Added the ability to delete a list in a group selection.
- Added style to the table head checkbox for indeterminate state.
- Added the ability to check all checkboxes on table list.

### v23.4.21a
> April 21, 2023
- Added a commented ready to switch fetch data for select elements on table (Parts and Labor)
- Implemented DRY method on fetching data from API.
- Updated `getparts.json` to sync with the original data from link.
- Added `getlaborcharge.json` based on original data from API.

### v23.4.20a
> April 20, 2023
- Added navigator button in table section.
- Added a feature to navigate to other tab on table section.
- Changed list price and quantity value to placeholder.
- Compressed the `width/height` line of code into one including `top, right, bottom, and left`.
- Changed class name of table to generalized its name.
- Removed unused className: `peso-symbol`.
- Added focus state on inputs and select element.
- Modified the `addParts()` function into a reusable function by the power of placeholders.

### v23.4.19a
> April 19, 2023
- Removed deleting `parts` in localStorage and adding when adding parts.
- Fixed an issue where adding a part while there's an existing one makes the existing one entered input gone.
- Adding a parts now add the list at the beginning instead of end.
- Added a delete list feature.
- Made some small changes on table list styles.
- Changed empty table message for parts table.
- Reduced the height size of the table empty message.
- Added a temporarily nav button on table.
- Date input has been shrinked to reduced form height.

### v23.4.18a
> April 18, 2023
- Added base64 icons to `:root` for ease of grabbing the data.
- Removed the Segoe UI fallback font.
- Expand the form body gap from `28` to `42px`.
- Added font face `Segoe Fluent Icons` for a dynamic icon changes.
- Added Costing Information Supplied By Head Operations table again with new look.
- Fetching parts now has the ability to map it to any posible parts select tag.
- Added a feature to remove localStorage `parts` key everytime the page load.
- Added the ability to insert new list on parts table.

### v23.4.17a
> April 17, 2023

`⚠️ OVERHAULED the HTML structure and CSS styles.`
- Fixed development changelog has been destroyed by the select tag at `v23.4.14a`.
- Deleted media query css file.
- Removed Costing Information Supplied By Head Operations table for now.

### v23.4.14a
> April 14, 2023
- Added a font fallback if client has no Segoe UI installed.
- Made a fetch code for test API for easy swapping.
- Headers section text now align center.
- Made some responsiveness changes on parts section.
- Removed headers text on Costing Information Supplied By Head Operations section.
- Added placeholder on `<select>` parts.
- Change form submit button name from `Add Item` to `Submit Quotation`.
- Added temporary style of a table on parts section.

### v23.4.6a
> April 6, 2023
- Reduced lines of code on `mapSelect()` function.
- Added parts from fetched database to Select Parts element using `forEach()` loop.
- Fixed select parts element not responsive enough upon squeezing screen.
- Added support to mobile screen sizes max-width: `480px`.

### v23.4.5a
> April 5, 2023
- Added testing data for fetching the calibration parts when away from office or testing it from home.
- Fixed parts element is on input element instead of select element.

### v23.4.4a
> April 4, 2023
- Added value to name and id for select elements based on their category.
- Added JS file for mapping of select elements.
- Declared variables for array based on `assets/images/script-reference/map-array-select-elements.png` and for select element.
- Remove option elements of select on `index.html`.
- Mapped all the array objects to select elements using the `mapSelect()` function.

### v23.4.2a
> April 2, 2023
- Remove default outline to all focusable element.
- Added select wrapper to select element so I can customize the style properly.
- Changed the `:root` colors to match the image reference accurately.
- Added green color to `:root`.
- Added style for `h3` elements.
- Added section container element and style it.
- Added styles for input label, input text and input-wrapper.
- Customized select by using select-wrapper and background-image custom dropdown arrow using SVG base64 code.
- Select element has now 2 types `default and big`.
- Added support for 1/2 and 3/4 size of input element for a container.
- Added styles for button element.
- Button supports hover and active state.
- Added full-page reference image for the front-end layout `assets/images/ui-reference/full-page.png`.

### v23.4.1a
> April 1, 2023
- Added semantic HTML element for form based on the reference picture `assets/images/ui-reference/page1.png`.
- Declared the root, general and some of usable class that might be reuse again in CSS.
- Added accent and primary color variable CSS.
- Added style for `h1` elements.