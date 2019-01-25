$(document).ready(function() { 
$("#start").on("click" ,function(){
    var topics = ["Soccer","slayer","Trolls","Tom Brady","dog","sloth","whaleshark","wine","keto","Raiders"];
    //remove start button
    $("#start").remove();
    console.log("hi");

    //create buttons from topics array to html
   for (var i = 0; i<topics.length;i++){ 
    $("#subwrapper").append("<button class='brady'>"+topics[i]+ "</button>");
   

   }
   //get query to get from giphy on button click
   $(".brady").on("click" , function() {
       //store the value of the button in the query variable-
       
    var query= $(this).text();
    console.log(query);
    
//create the query url from the button pushing info
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=K5IsUjZXe8HM1IY1bmZnyDthebkXKLig&limit=10&offset=0&rating=G&lang=en";
   
console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
       
        
       // loop so it shows entire object of gifs
for (var i =0;i<response.data.length; i++) {
            var $img=$("<img>");
            $img.addClass("gifs");
            $img.attr("src", response.data[i].images.downsized.url);
            var still = response.data[i].images.fixed_width_still.url;
            console.log(still);
            $("#subwrapper").append($img);
            //add jquery to display rating under each pic
            $("#subwrapper").append(response.data[i].rating);
            //set up swap
            $(".gifs").on("click", function() {
                console.log("you clicked it");
                $img.attr("src", still);
                $("#subwrapper").append($img);
            })
           
}


      //.then fxn ends here      
        })
        //onclick for search ends here
    });

    
    //start fxn ends here
   })
    
   console.log("hey");
   //ready fxn ends here
})
console.log("hum");




//add a form--takes input and value from user, adds it to array and 
//then make a fxn call to reamake the buttons with the new data



