// Validator to check inut and give appropriate response
function displayAlert(form) {
    if (form.name.value == '') {
        alert("Please key in a value!!!")
    }
    else {
        alert(form.name.value)
    }
}