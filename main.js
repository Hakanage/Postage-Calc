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