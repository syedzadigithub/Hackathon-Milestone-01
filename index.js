var togglebutton = document.getElementById("togglebutton");
var skillsDiv = document.getElementById("skills");
if (togglebutton && skillsDiv) {
    togglebutton.addEventListener('click', function () {
        if (skillsDiv.style.display === "none") {
            skillsDiv.style.display = "block";
            togglebutton.value = "Hide Skills";
        }
        else {
            skillsDiv.style.display = "none";
            togglebutton.value = "Show Skills";
        }
    });
}
else {
    console.log("Required element not found in the DOM");
}
