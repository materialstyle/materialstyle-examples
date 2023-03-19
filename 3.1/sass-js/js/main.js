// Import the Material Style bundle
//
// This includes Popper and all of Material Styles's JS plugins.

import "../node_modules/@materialstyle/materialstyle/dist/js/materialstyle.bundle.min.js";

// Initialize Text Fields
var textFieldList = [].slice.call(document.querySelectorAll('.form-control'))
textFieldList.map(function (textField) {
  return new materialstyle.TextField(textField)
})

// Initialize Select Fields
var selectList = [].slice.call(document.querySelectorAll('.form-select'))
selectList.map(function (select) {
  return new materialstyle.SelectField(select)
})
