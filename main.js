var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

$("#test").on("submit", function(e){

    e.preventDefault()
    
    var info = $('#info').find(':selected').val(),
        data = {};
     
    data.info = eval("[" + info + "]") // convert to an array
        
    console.log(info)
    //postData(data)   // you can use this function instead of form post method
 })
 
 function postData(data) {
     $.ajax({
         url: '/create',
         data: data, 
         type: 'POST',
         success: function (data, textStatus, xhr) { 
             console.log("successful!")
         },
         error: function (xhr, statusText, error) {
             console.log("error: " + xhr.responseText )
         }
     })
 }

 var Insurance = []
 Insurance["under £250"] = 1;
 Insurance["over £250"] = 2;

 var Country = []
 Country["UK"] = 1;
 Country["USA"] = 2;
 Country["France"] = 3;
 Country["Germany"] = 4;
 Country["Australia"] = 5;

 function getInsuranceAmt() {
    var InsuranceAmt = 0;
    var theForm = document.forms["postageform"];
    var Insurance = theForm.elements["Insurance"];
    for (var i = 0; i < Insurance.length; i++) {
      if (Insurance[i].checked) {
        InsuranceAmt = person[Insurance[i].value];
      }
    }
    return InsuranceAmt;
  }
  
  function getDestinationCountry() {
    var DestinationCountry = 0;
    var theForm = document.forms["postageform"];
    var selectedCountry = theForm.elements["Country"];
    DestinationCountry = elec[selectedCountry.value];
    return DestinationCountry;
  }

  function calculatePostageInfo() {
    var totalco = getInsuranceAmt() * getDestinationCountry() + waste() + recyclealu() + recycleplas();
  
    //display the result
    document.getElementById('totalConsumption').innerHTML = +totalco.toFixed(2);
  }
  
  //add a function to hide the result on page loading at the start
  function hidePostageInfo() {
    document.getElementById('totalConsumption').innerHTML = "0";
  }

  function validateall() {
    var error = document.getElementById("error")
    if (!getDestinationCountry()) {
      // Changing content and color of content
      error.textContent = "Destination must be selected"
      error.style.color = "red"
      return false;
    }
    return true;
  }