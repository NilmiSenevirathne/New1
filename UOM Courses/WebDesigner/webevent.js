const loginfield = document.getElementById("loginfield");
const tooltip = document.getElementById("tooltip");

function viewTooltip(event){
    tooltip.style.display ="block";
    tooltip.style.left='${event.clientX +10}px';
    tooltip.style.top='${event.clientY +10}px';
}
    
function hideTooltip(){
        tooltip.style.display='none';
    }


loginfield.addEventListener('mouseenter',viewTooltip);
loginfield.addEventListener('mouseenter',hideTooltip);