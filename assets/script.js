var hoursArray = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
var militaryTimeArray = [9,10,11,12,13,14,15,16,17]
var currentDateAndTime = Date(Date.now());
var currentHour = new Date().getHours();

$("#currentDay").append(currentDateAndTime);
// console.log(currentHour)

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
    var textFieldEl = $('<textarea>')
    textFieldEl.attr('id', "tx"+i)
    textColEl.append(textFieldEl);
    

    var saveBtnColEl = $("<div class='col-1 saveBtn i:hover'>")
    rowEl.append(saveBtnColEl);
    var buttonEl = $("<button class='i:hover button'>")
    buttonEl.text("Save")
    buttonEl.attr('id', i)
    saveBtnColEl.append(buttonEl);
    buttonEl.on("click", clickToLocalStorage)
    
    getLocalStorage(i);
}


var saveBtn = $('.button');

function clickToLocalStorage(i){
    // var textArea = $(this).siblings(".text-area").val();
    // console.log(textArea)
    
    
    
    // console.log(this)
    var clickId = $(this).attr("id");
    // console.log(clickId)
    // var textArea = document.getElementById("text-area").value;
    // var textArea = $(this).getElementById("text${i}").value;  
    // console.log('#tx'+i)
    var textArea = document.getElementById("tx"+clickId).value;
    // console.log(this.parrent)
    // var textArea = $(this).parrent.sibling.children[1].val()
    // console.log(textArea)
    localStorage.setItem(clickId, textArea);
    
    
    // event.preventDefault();
    // event.stopPropagation();
    // if(event.target.matches("button")){
    // var textArea = document.getElementById("text-area").value;
    // console.log(textArea)
    // var storageArray = JSON.parse(localStorage.getItem("textArea"))
    // if(!storageArray){storageArray = []}
    // storageArray.push(textArea);

    // localStorage.setItem("textArea", JSON.stringify(storageArray))
    // }
}


function getLocalStorage(variable){
    var returnValue = localStorage.getItem(variable)
//    console.log(returnValue.text)
    if (returnValue){
        $('#tx'+variable).text(returnValue);
        // console.log($('#tx'+variable))
    }

} 

