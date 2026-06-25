document.addEventListener("DOMContentLoaded", function () {
    // // Zugriff über id:
    // const form = document.getElementById("rechnerForm");
    // form.addEventListener("submit", function() {
    //     // etwas machen
    // })

    // geht auch ohne getElementById
    // neue Browser speicher automatisch die Elemente mit ID Name als variable
    rechnerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // getElementByTagName bekommt man alle Elemente mit dem HTML Tag (Array)
        // const inputElements = document.getElementsByTagName("input");
        // console.log(inputElements)

        // // inputElements["brutto"] greifen wir auf das Input Element mit der ID "butto" zu.
        // const brutto = inputElements["brutto"].value;
        // console.log(brutto)
        // // liefert Array von Elementen mit dem ClassName
        // // getElementsByClassName("submit-button")[0] gibt uns den ersten eintrag mit der Klasse
        // // "submit-button", also unseren button
        // const button = document.getElementsByClassName("submit-button")[0];
        // console.log(button)
        // button.value = "Nochmal Berechnen";

        // // getElementByName geht über den Namen des Elements (Array von allen Elementen mit dem Namen)
        // const steuerElement=document.getElementsByName("steuer")[0];
        // const steuer = steuerElement.value / 100 +1
        // console.log(steuer)

        // // querySelector ist eine weitere Variante, da gibt man tagname und eine Bedingung an
        // const output = document.querySelector('p[id="output"]');
        // output.innerHTML=`${brutto} * ${steuer} = ${brutto*steuer}`

        // // Attribute ändern
        // document.getElementById("brutto").setAttribute("step", "1");
        // document.getElementById("brutto").setAttribute("class", "submit-button");
        // const labels = document.getElementsByTagName("label");
        // console.log(labels)
        // for(label of labels) {
        //     label.style.backgroundColor="lightblue";
        // }

    })


    const ueberschrift = document.createElement("h1");
    ueberschrift.innerHTML = "Test Text";
    ueberschrift.id = "ueberschrift";
    header.appendChild(ueberschrift);

    // TodoList Code:
    todoListForm.addEventListener("submit", function(event)  {
        event.preventDefault();
        const todo = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type="checkbox"
        checkbox.checked=false;
        checkbox.addEventListener("click", function() {
            console.log(todo)
            todo.remove();
        })        
        
        todo.textContent = todoItem.value;
        todo.appendChild(checkbox);
        todoList.appendChild(todo);
    })
});