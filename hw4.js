var whatJoke;

function showJoke(){
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange=function()  {
    if (xmlhttp.readyState==4) {
      if(xmlhttp.status == 200) {
        processResponse(xmlhttp.responseText);
      }

      else{
        responseArea.innerHTML = "Error code " + xmlhttp.status;
      }
    }
  }

  xmlhttp.open("GET", "Q.json", true);
  xmlhttp.send(null);

  function processResponse(responseJSON) {
    var question = JSON.parse(responseJSON);
    whatJoke = Math.round(((Math.random()*36) %6));
    displayText = question.Questions[whatJoke];
    document.getElementById("responseAreaAnswer").innerHTML = "Press show answer to see answer!";
    document.getElementById("responseAreaJoke").innerHTML = displayText;
  }

}

$( document ).ready(function() {
$(function() {    // do once original document loaded and ready
        $('form[name="sa"] input').click(function() {
                $.getJSON("A.json", function(responseObject, diditwork) {
                        console.log(diditwork);
                        var displayText = responseObject.Answers[whatJoke];
                $("#responseAreaAnswer").html(displayText);
                } );  // getJSON
        } );  // click
  } ); // onReady
});


$( document ).ready(function() {
  $("button").click(function(){
    $("body").css( "background-color", "yellow");
    $("#responseAreaAnswer").css( "color", "black");
    $("#responseAreaJoke").css( "color", "black").append("           HI!!!!!!");
    $("#responseAreaAnswer").fadeOut(1000).fadeIn(2000);
    $("#banana").mouseover(function(){
      $("#banana").animate({ height : '-=25'}, 2000);;
    });
    $("#banana").mouseout(function(){
      $("#banana").animate({ height : '+=25'}, 2000);;
    });
  });
});

// function doXMLHttpRequest() {
//   var xhr = new XMLHttpRequest(); 

//   xhr.onreadystatechange=function()  {
//    if (xhr.readyState==4) {
//      if(xhr.status == 200) {
//         processResponse(xhr.responseText);
//     } else {
//       responseArea.innerHTML="Error code " + xhr.status;
//     }
//    }
//   }
//   xhr.open("GET", "data.json", true); 
//   xhr.send(null); 
//   } 

//   function processResponse(responseJSON) {
//         var responseObject = JSON.parse(responseJSON);
//         var displayText = 
//                 "There are " 
//                 + responseObject.employees.length 
//                 + " employees:<ol>";
//         for (var i = 0; i<responseObject.employees.length; i++) {
//                 var employee = responseObject.employees[i];
//                 displayText += "<li>"
//                                         +employee.firstName + " " 
//                                         + employee.lastName + "<\/li>";
//                 }
//         displayText += "<\/ol>";
//         document.getElementById("responseArea").innerHTML = displayText;
//         }


