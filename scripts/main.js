var indexOfStorage = [];

var maxValue = 0;
var orderNumber = 1;


$(window).on('load', function(){ 
    for (var i=0; i < localStorage.length; i++) {
        var num = parseInt(localStorage.key(i));
        indexOfStorage.push(num);
        maxValue = Math.max(...indexOfStorage);
        orderNumber = maxValue + 1;
    }  
    for (var i=0; i <= localStorage.length; i++) {
        var num = localStorage.key(i);
        var order = localStorage.getItem(num);
        $("#order-list").append(order);
    }
})

function deleteOrder(num) {
    localStorage.removeItem(num);
    $("#" + num).remove();
}

$("form").submit(function(event) {
    event.preventDefault();
    var orderData = 
        '<li id="' + orderNumber + '"><p>Order Number: ' + orderNumber +'<br />Name: ' + $("#coffeeOrder").val() + '<br />' 
        + 'Email: ' + $("#emailInput").val() + '<br />' 
        + 'Size: ' + $("input:checked").val() + '<br />' 
        + 'Flavor: ' + $("#flavorShot").val() + '<br />' 
        + 'Strength: ' + $("#strengthLevel").val() + '<br /><button id="x-button" onclick="deleteOrder(' + orderNumber + ')">Remove</button><br /></li>'
    $("#order-list").append(orderData);
    localStorage.setItem(orderNumber, orderData);
    orderNumber ++;
})