const togglebutton = document.getElementById(`togglebutton`) as HTMLButtonElement| null;
const skillsDiv = document.getElementById(`skills`) as HTMLDivElement | null;

if (togglebutton && skillsDiv) {
    togglebutton.addEventListener('click' , () => {
        if (skillsDiv.style.display === `none`) {
            skillsDiv.style.display = `block`;
            togglebutton.value = "Hide Skills";

} else {
    skillsDiv.style.display = `none`; 
    togglebutton.value = "Show Skills";
    }

});

} else {
    console.log("Required element not found in the DOM");
}
