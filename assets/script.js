var hoursArray = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
var militaryTimeArray = [9,10,11,12,13,14,15,16,17]
var currentDateAndTime = Date(Date.now());
var currentHour = new Date().getHours();

$("#currentDay").append(currentDateAndTime);
console.log(currentHour)

for(var i = 0; i < hoursArray.length; i++){
    var rowEl = $("<div class='row'>")
    $(".container").append(rowEl);

    var timeColEl = $("<div class='col-1 hour'>")
    timeColEl.text(hoursArray[i]);
    rowEl.append(timeColEl);


    var textColEl = $("<div class='col-10'>")
        if (currentHour>militaryTimeArray[i]){
            textColEl.addClass('past')
        }else if(currentHour===militaryTimeArray[i]){
            textColEl.addClass("present")
        }else{
            textColEl.addClass('future')
        }
    rowEl.append(textColEl);
    var textFieldEl = $('<textarea id="text-area">')
    textColEl.append(textFieldEl);
    

    var saveBtnColEl = $("<div class='col-1 saveBtn i:hover'>")
    rowEl.append(saveBtnColEl);
    var buttonEl = $("<button id='Submit' class='i:hover button'>")
    buttonEl.text("Save")
    saveBtnColEl.append(buttonEl);
    buttonEl.on("click", clickToLocalStorage)
    
}



function clickToLocalStorage(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.target.matches("button")){
    var textArea = document.getElementById("text-area").value;
    console.log(textArea)
    var storageArray = JSON.parse(localStorage.getItem("textArea"))
    if(!storageArray){storageArray = []}
    storageArray.push(textArea);

    localStorage.setItem("textArea", JSON.stringify(storageArray))
    }
}

