import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { production_lines } from './plant-data.js';

// Populates the manufacturing line drop down
document.querySelector('#line-select').innerHTML = `
    <option disabled selected value> -- Select a Line -- </option>
    ${production_lines.map((item) => (`<option value=${item.id}>${item.name}</option>`))}`

// Variable for the line selection dropdown
const lineSelectionDropdown = document.querySelector('#line-select');

lineSelectionDropdown.addEventListener("change", changeHandler)

// Initial value on page load for dropdown label
document.getElementById('line-select-label').innerText = "Select a Manufacturing Line";


// Handles the DOM changes for switching the line select dropdown
function changeHandler(){
  // document.getElementById('line-select-label').innerText = lineSelectionDropdown.options[lineSelectionDropdown.selectedIndex].text;
  
  const result = production_lines.filter((line) => lineSelectionDropdown.options[lineSelectionDropdown.selectedIndex].text === line.name);
  document.getElementById('content').innerHTML = ` ${result.map((item) => (`<p>${item.name}</p><p>${item.description}</p><img src=${item.image} alt=${item.name}/>`))}`
}




document.querySelector('#app-content').innerHTML = `
  <div id="content">
    
  </div>
`

