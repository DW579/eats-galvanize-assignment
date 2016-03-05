$(document).ready(function() {
  var hamburger;

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var firstItem = $('<p></p>').text(data.menu[0].name);
      var firstPrice = $('<p></p>').text(data.menu[0].price);
      $('#firstItem').append(firstItem);
      $('#firstItem').append(firstPrice);
      hamburger = data.menu[0].name;
    }
  });

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var secondItem = $('<p></p>').text(data.menu[1].name);
      var secondPrice = $('<p></p>').text(data.menu[1].price);
      $('#thirdItem').append(secondItem);
      $('#thirdItem').append(secondPrice);
    }
  });

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var thirdItem = $('<p></p>').text(data.menu[2].name);
      var thirdPrice = $('<p></p>').text(data.menu[2].price);
      $('#secondItem').append(thirdItem);
      $('#secondItem').append(thirdPrice);
    }
  });

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var fourthItem = $('<p></p>').text(data.menu[3].name);
      var fourthPrice = $('<p></p>').text(data.menu[3].price);
      $('#fourthItem').append(fourthItem);
      $('#fourthItem').append(fourthPrice);
    }
  });


  $('#quanityButton').on('click', function() {
    var $this = $(this);
    if ($('#quanity').val() > 0) {
      var quanity = $('#quanity').val();
      console.log(typeof(quanity));
      for (var i = 0; i < parseInt(quanity); i++) {
        
      }
    }
  })
})
