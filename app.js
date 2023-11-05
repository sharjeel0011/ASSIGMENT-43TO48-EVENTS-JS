// <!---question no 1-->
function deleteRow(button) {
    var row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
}
// <!---question no 1-->
const getElement = document.getElementById("picture")
const getSrc = getElement.src;
const newImage = "imag/1.jpg"

function changeImage() {
    getElement.src = newImage;
}

function reverceImage() {
    getElement.src = getSrc;
}
//ans4

    let value = 0;
    const counterElement = document.getElementById("value")
    function updateValue(){
     counterElement.textContent=value
    }

    function incress(){
        value++;
        updateValue()
    }
    function decress(){
       if(value>0){
       value--
        updateValue()

       }
    }
   updateValue()







