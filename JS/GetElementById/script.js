// auf HTML Elemente zugreifen und abspeichern mit GetElementByID
const headline = document.getElementById("headline")
headline.innerHTML = "Zimmerliste:"
headline.style="color:red;"
isred = true

function changeColor() {
    if(isred) {
        headline.style="color:green;" 
        isred=false;
    } else {
        headline.style="color:red;"
        isred = true;
    }  
}

// Alle Checkboxen mit dem Namen "rooms" speichern
// mithilfe von getElementByName
const roomsCheckboxes = document.getElementsByName("rooms");
console.log(roomsCheckboxes)

let complete = 0;
for(let i = 0; i<10; i++) {
    if(roomsCheckboxes[i].checked) {
        complete ++;
    }
}
const progressBar = document.getElementById("progr")
progressBar.value = complete;

for(let i = 0; i< 10 ; i++) {
    roomsCheckboxes[i].addEventListener('change', function(){
        if(this.checked) {
            complete++;
        } else {
            complete--;
        }
        progressBar.value = complete;

    });
}
