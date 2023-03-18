// Import our custom CSS
import '../scss/styles.scss';

// Import only the Material Style components we need
import { Util, Dropdown, TextField, SelectField } from '@materialstyle/materialstyle';
import { MDCRipple } from '@material/ripple';

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
