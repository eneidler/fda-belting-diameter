

export function calculateRollDiameter(){
    const length = document.getElementById("input-length").value * 12;
    const thickness = document.getElementById("input-thickness").value;
    const core_diameter = document.getElementById("input-core-diameter").value;

    const outer_diameter = Math.sqrt((length * thickness)/(Math.PI*(Math.pow(core_diameter, 2)/4)))*2;

    return outer_diameter * 12;
}