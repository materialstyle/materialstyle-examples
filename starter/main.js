// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new materialstyle.Popover(popover)
  })

// Initialize Ripple
const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(s => {
  return new mdc.ripple.MDCRipple(s)
})

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

// Initialize Shapes
var shapes = [].slice.call(document.querySelectorAll('.m-shape-container'))
shapes.map(function (s) {
  new materialstyle.Shape(s)
})

document.querySelector('#show-snackbar').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#default-snackbar'));
});
