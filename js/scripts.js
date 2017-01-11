$(document).ready(function() {
  $("form").submit(function(event) {

    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var birthday = $("input#born").val();
    var season = $("input:radio[name=season]:checked").val();
    var icecream = $("input:radio[name=icecream]:checked").val();
    var favoriteColor = $("input#color").val();
    var favoriteFood = $("input#fav-food").val();
    var favoriteAnimal = $("input#fav-animal").val();

    $("#output1").text(firstName);
    $("#output2").text(lastName);
    $("#output3").text(birthday);
    $("#output4").text(season);
    $("#output5").text(icecream);
    $("#output6").text(favoriteFood);
    $("#output7").text(favoriteAnimal);
    document.body.style.backgroundColor= favoriteColor;

  });

});
