$(document).ready(function(){
  // Show all cancer story abstracts in the stories.html page
  for(var i = 0; i < cancerStories.length; i++){
    var newCard =
      "<div class='card border-secondary mb-3' data-type=" + cancerStories[i]["type"] + ">" +
        "<div class='card-body' style='background-image: linear-gradient(to left, rgba(255,255,255,1) 60%, rgba(255,255,255,0.5)), url(images/" + cancerStories[i]["image"] + ")'>" +
          "<h4 class='card-title'>" + cancerStories[i]["title"] + " · " + cancerStories[i]["date"] + "</h4>" +
          "<p class='card-text'>" + cancerStories[i]["abstract"] + "</p>" +
          "<a href='story.html#" + cancerStories[i]["id"] + "'><button type='button' class='btn btn-outline-primary'>استمر في القراءة</button></a>" +
        "</div>" +
      "</div>";
    $("#stories-browser").append(newCard);
  }

  // Show the appropriate cancer story in the story.html#CANCER_ID page
  showCancer = document.location["hash"].replace("#", "");
  for(var i = 0; i < cancerStories.length; i++){
    if(cancerStories[i]["id"] == showCancer){
      $("#jumbotron-story").css("background-image", "linear-gradient(to left, rgba(110, 43, 88, 0.95) 50%, rgba(110, 43, 88, 0.5)), url(images/" + cancerStories[i]["image"] + ")");
      $("#cancer-title").text(cancerStories[i]["title"] + " · " + cancerStories[i]["date"]);
      $("#cancer-abstract").text(cancerStories[i]["abstract"]);
      $("#cancer-full").prepend("<p>" + cancerStories[i]["full"].replaceAll("---", "</p><p>") + "</p>");
    }
  }

  // Show the appropriate cancer type upon cancer type selection
  $("#selector-cancer-type").change(function(){
    var selectedType = $(this).val();
    if(selectedType == "all"){
      $(".card").show();
    } else {
      $(".card").hide();
      $("[data-type=" + selectedType + "]").show();
    }
  });
});
