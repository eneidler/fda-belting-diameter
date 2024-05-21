import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import redX from './images/red_x.svg'
import greenCheck from './images/green_check.svg'
import { production_lines } from './js/plant-data.js';
import { calculateRollDiameter } from './js/diameter-calculator.js';

// Populates the manufacturing line drop down
document.querySelector('#line-select').innerHTML = `
    <option disabled selected value> -- Select a Line -- </option>
    ${production_lines.map((item) => (`<option value=${item.id}>${item.name}</option>`))}`

// Variable for the line selection dropdown
const lineSelectionDropdown = document.querySelector('#line-select');

let diaBackground;

lineSelectionDropdown.addEventListener("change", changeHandler);

// Initial value on page load for dropdown label
document.getElementById('line-select-label').innerText = "Select a Manufacturing Line";

// Handles the DOM changes for switching the line select dropdown
function changeHandler(){
  const result = production_lines.filter((line) => lineSelectionDropdown.options[lineSelectionDropdown.selectedIndex].text === line.name);

  document.getElementById('content').innerHTML = ` ${result.map((item) => (`
  <h3>${item.name}</h3>
  <p>${item.description}</p>
  `))}` 
}

// This is the id of the button
document.getElementById('calculate-diameter').onclick = calculateClickHandler;

export function calculateClickHandler(){
    const outer_diameter = calculateRollDiameter(); // The calculate funtion works as intended
    const result = production_lines.filter((line) => lineSelectionDropdown.options[lineSelectionDropdown.selectedIndex].text === line.name);

    diaBackground = (outer_diameter > result.map(item => item.max_dia)) ? 'dia-not-okay' : 'dia-okay'
    
    document.getElementById('calculated-dia').innerText = `${outer_diameter.toFixed(2)}`
    document.getElementById('content').setAttribute('class', diaBackground)
}


document.querySelector('#app-content').innerHTML = `
  <div id="content">
    
  </div>
`

