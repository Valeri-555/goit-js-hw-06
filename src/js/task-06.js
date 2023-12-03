const input = document.querySelector ("#validation-input");


input.addEventListener ("blur", () => {
    const inputlength = input.value.length;
    const datalength = input.getAttribute("data-length");
    const dataValue = parseInt(input.getAttribute("data-length"));
    
    if (inputLength === datavalue) {
        input.classlist.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classlist.add("invalid");
        input.classList.remove("valid")
    }   
console.log(inputLength);
console.log(dataValue);
});