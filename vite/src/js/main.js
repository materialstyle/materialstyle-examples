// Import our custom CSS
import '../scss/styles.scss';

// Import only the Material Style components we need
import { Dropdown, Offcanvas, Popover, TextField, SelectField, Shape, Snackbar } from '@materialstyle/materialstyle';
import { MDCRipple } from '@material/ripple';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

// Initialize Ripple
const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(s => {
  return new MDCRipple(s)
})

// Initialize Text Fields
var textFieldList = [].slice.call(document.querySelectorAll('.form-control'))
textFieldList.map(function (textField) {
  return new TextField(textField)
})

// Initialize Select Fields
var selectList = [].slice.call(document.querySelectorAll('.form-select'))
selectList.map(function (select) {
  return new SelectField(select)
})

// Initialize Shapes
var shapes = [].slice.call(document.querySelectorAll('.m-shape-container'))
shapes.map(function (s) {
  new Shape(s)
})

document.querySelector('#show-snackbar').addEventListener('click', function () {
  new Snackbar(document.querySelector('#default-snackbar'));
});
