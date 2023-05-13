# Wellmade Motors Calibration Frontend Changelog
All notable changes to this project will be documented in this file. Dates are displayed in UTC +8.


### v1.1.1
> April 24, 2023
- Removed attribute `data-table` in child of a grand-parent element that has already that attribute.

### v1.1.0
> April 22, 2023

`⚠️ OVERHAULED the HTML structure and CSS styles.`
- Removed base64 icons on `:root` from style.css.
- Added font face `Segoe Fluent Icons` for a dynamic icon changes.
- Compressed the `width/height` line of code into one including `top, right, bottom, and left`.
- Added table in form that support multiple tabs and multiple list selection.
- `Parts` now belong to table section & added new group called `Labor & Machine Charges` on table section.
- All posible function in script are now dynamic (DRY method used).
- Renamed the javascript from `map-select.js` to `script.js`.
- Changed form submit button name from `Add Item` to `Submit Quotation`.

### v1.0.0
> April 2, 2023
- Added full-page reference image for the front-end layout `assets/images/ui-reference/full-page.png`.
- Added `:root` color library based on the reference image.
- Implemented semantic HTML for the page.
- Implemented a reusable class element for element style, display and color.
- Customized select by using select-wrapper and background-image custom dropdown arrow using SVG base64 code.
- Customized input text, input date and big-type of select element.
- Responsive inputs that auto resize their width, also support 1/2 or 1/3 wrappable input text.
- Button supports hover and active state.