/*global Instafeed */
/*global USER_ID*/
/*global moment*/

 /*global fetch */
/*global json*/
/*global moment*/
var myurl = "https://api.instagram.com/v1/users/16597939728/media/recent?access_token=16597939728.1677ed0.3f7231da4a16483ea64cf829725edc5d";
  fetch(myurl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      var results = "<hr><h2>Click any image below to go to our Instagram post!  This is where we keep a record of what's happening at the farm.</h2>";
      results+="<hr>";
       //go through each image and display it
       for (let i=0; i < json.data.length; i++) {
         console.log("i %3: " + i%3);
          if(i%3===0)
            {
              results+="</div><div class=row>"
            }
           var date = new Date(json.data[i].caption.created_time * 1000); 
           let newDay = moment(date).format('MMMM Do YYYY');
           let caption = json.data[i].caption.text;
           let truncCaption = caption.substr(0, 40) + "...";
        	 results +=  "<div class=\"col-sm-4\">";
        	 results += "<div class='insta'>" + newDay +"</div> <figure> <a href=\"" +json.data[i].link;
        	 results +="\"> <img alt=\"" + truncCaption +"\" src=\"" + json.data[i].images.low_resolution.url +"\">";
        	 results+="</a> <figcaption class=\"insta\">"+ truncCaption +"</figcaption></figure></div>";
  	     /* if (i===18)
  	      { results += "</div> <!--Grid column--><div class=\"col-lg-4 col-md-6 mb-4\">";
            i=-2;
  	      }
          if (i===19)
          { results += "</div> <!--Grid column--><div class=\"col-lg-4 col-md-6 mb-4\">";
            i = -1;
          }*/
        }
      results += "</div>";
      console.log(results);
      document.getElementById("instafeed").innerHTML = results;
      /*
    <div class="col-lg-4 col-md-12 mb-4">

      <img src="../images/liv and snaps.JPG" class="img-fluid mb-4" alt="2571">

      <img src="../images/spring blooms.JPG" class="img-fluid mb-4" alt="2573"
          data-wow-delay="0.3s">
          
      <img src="../images/sweet pea harvest.JPG" class="img-fluid mb-4" alt="2701"
          data-wow-delay="0.4s">

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-4 col-md-6 mb-4">

      <img src="../images/daffodils.JPG" class="img-fluid mb-4" alt="2574"
          data-wow-delay="0.1s">

        <img src="../images/bouquet.JPG" class="img-fluid mb-4" alt="2701"
          data-wow-delay="0.4s">
        <img src="../images/foxglove.JPG" class="img-fluid mb-4"  alt="2701"
          data-wow-delay="0.4s">

    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-4 col-md-6 mb-4">
        <img src="../images/spring blooms 2.JPG" class="img-fluid mb-4" alt="8544"
          data-wow-delay="0.2s">

        <img src="../images/liv in the garden.JPG" class="img-fluid mb-4" alt=8548""
          data-wow-delay="0.5s">
        <img src="../images/mollie and snaps.JPG" class="img-fluid mb-4" alt=8548""
          data-wow-delay="0.7s">
    </div>
    <!--Grid column-->
    
  </div>
<!--Grid row-->
</div>
";
      
      document.getElementById("comic").innerHTML = json["title"];
      document.getElementById("comicImage").src = json["img"];
      document.getElementById("altText").innerHTML = json["alt"];
    });
  
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  
  const url = "https://api.instagram.com/v1/users/16597939728/media/recent?access_token=16597939728.1677ed0.3f7231da4a16483ea64cf829725edc5d";
  //console.log(url);
  
  fetch(url)
    .then(function(response) {
      //You could also supply a function to call in case of an error.
     
      return response.json();
    }).then(function(json) {	
      //console.log(json);
      */
});