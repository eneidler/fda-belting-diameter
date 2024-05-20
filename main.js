import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { production_lines } from './js/plant-data.js';
import { calculateRollDiameter } from './js/diameter-calculator.js';

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
  const result = production_lines.filter((line) => lineSelectionDropdown.options[lineSelectionDropdown.selectedIndex].text === line.name);
  document.getElementById('content').innerHTML = ` ${result.map((item) => (`<h3>${item.name}</h3><p>${item.description}</p>`))}` // <img src=${item.image} alt=${item.name}/>
}

// This is the id of the button
document.getElementById('calculate-diameter').onclick = calculateClickHandler;

export function calculateClickHandler(){
    const outer_diameter = calculateRollDiameter(); // The calculate funtion works as intended

    document.getElementById('calculated-dia').innerText = `${outer_diameter.toFixed(2)}"`
}


document.querySelector('#app-content').innerHTML = `
  <div id="content">
    
  </div>
`

