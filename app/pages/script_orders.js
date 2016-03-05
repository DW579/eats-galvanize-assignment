var pickedPriceArray = [];

$(document).ready(function() {


  var tableCheeseBurger = document.querySelector('#firstItem');
  var tableHamburger = document.querySelector('#secondItem');
  var tableCheesePizza = document.querySelector('#thirdItem');
  var tablePepperoniPizza = document.querySelector('#fourthItem');
  var tableSausagePizza = document.querySelector('#fifthItem');
  var subTotalTable = document.querySelector('#subTotalTable');

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var firstItem = $('<p></p>').text(data.menu[0].name);
      var firstPrice = $('<p></p>').text(data.menu[0].price);
      $('#firstItem').append(firstItem);
      cheeseBurger = data.menu[0].name;
      $('#firstPrice').append(firstPrice);
      cheeseburgerPrice = data.menu[0].price;
    }
  });

  tableCheeseBurger.addEventListener('click', function() {
    var cheeseburger = document.createElement('tr');
    var name = 'Cheeseburger';
    var price = 10.99;
    pickedPriceArray.push(price);
    $(cheeseburger).append(name);
    $(cheeseburger).append(price);
    subTotalTable.appendChild(cheeseburger);
  })

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var secondItem = $('<p></p>').text(data.menu[1].name);
      var secondPrice = $('<p></p>').text(data.menu[1].price);
      $('#thirdItem').append(secondItem);
      $('#thirdPrice').append(secondPrice);
    }
  });

  tableHamburger.addEventListener('click', function() {
    var hamburger = document.createElement('tr');
    var name = 'Hamburger';
    var price = 8.99;
    pickedPriceArray.push(price);
    $(hamburger).append(name);
    $(hamburger).append(price);
    subTotalTable.appendChild(hamburger);
  })

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var thirdItem = $('<p></p>').text(data.menu[2].name);
      var thirdPrice = $('<p></p>').text(data.menu[2].price);
      $('#secondItem').append(thirdItem);
      $('#secondPrice').append(thirdPrice);
    }
  });

  tableCheesePizza.addEventListener('click', function() {
    var cheesePizza = document.createElement('tr');
    var name = 'Cheese Pizza';
    var price = 9.99;
    pickedPriceArray.push(price);
    $(cheesePizza).append(name);
    $(cheesePizza).append(price);
    subTotalTable.appendChild(cheesePizza);
  })

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var fourthItem = $('<p></p>').text(data.menu[3].name);
      var fourthPrice = $('<p></p>').text(data.menu[3].price);
      $('#fourthItem').append(fourthItem);
      $('#fourthPrice').append(fourthPrice);
    }
  });

  tablePepperoniPizza.addEventListener('click', function() {
    var pepperoniPizza = document.createElement('tr');
    var name = 'Pepperoni Pizza';
    var price = 11.99;
    pickedPriceArray.push(price);
    $(pepperoniPizza).append(name);
    $(pepperoniPizza).append(price);
    subTotalTable.appendChild(pepperoniPizza);
  })

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: "GET",
    success: function(data) {
      var fifthItem = $('<p></p>').text(data.menu[4].name);
      var fifthPrice = $('<p></p>').text(data.menu[4].price);
      $('#fifthItem').append(fifthItem);
      $('#fifthPrice').append(fifthPrice);
    }
  });

  tableSausagePizza.addEventListener('click', function() {
    var sausagePizza = document.createElement('tr');
    var name = 'Sausage Pizza';
    var price = 12.99;
    pickedPriceArray.push(price);
    $(sausagePizza).append(name);
    $(sausagePizza).append(price);
    subTotalTable.appendChild(sausagePizza);
  })

  $('#deliverButton').on('click', function() {
    var totalString = pickedPriceArray.join('+');
    var finalTotal = eval(totalString);
    var subTotal = document.createElement('tr');
    subTotalTable.appendChild(subTotal);
    $(subTotal).append(finalTotal);
    $.ajax({
      url: 'https://galvanize-eats-api.herokuapp.com/orders',
      method: "POST",
      data: JSON.stringify(totalString),
      // contentType: "application/json",
      datatype: 'json',
      success: function() {
        console.log('You did it');
      }
    });
  })
})
