    $(function() { 
        // page has loaded
        // need to pull the old coffee orders from localStorage
        // handle edge cases with an If block (edge case = nothing for JSON to pull in from local storage)

        var orders = []; // *************** Beginning section created

        var oldOrdersJSON = localStorage.getItem("coffeeOrders"); // *************** 5th section created
        var oldOrders = JSON.parse(oldOrdersJSON);

        if (oldOrders != null) { // **************** 8th section created to clean up 7th section
            orders = oldOrders;
        };

        /*
        if (oldOrders === null) { // *************** 7th section created
            // edge case here
            orders = [];
        } else {
            // carry on as usual
            orders = oldOrders; // moved here for 7th section
        };
        */
    
        // orders = oldOrders; -- placed here during 5th section

        // show the old orders to the screen via loop right when page loads // *************** 6th section created
        var oldOrdersHTML = "";
        orders.forEach(function(currentOrder) { // section 7 allows this to work
            oldOrdersHTML += renderCoffeeOrder(currentOrder);
        });
        $("#orderList").append(oldOrdersHTML);

        function renderCoffeeOrder(order) { // *************** 1st section created
            var finalHTML = "<div class='order'>";

            finalHTML += "<span>" + order.coffee + "</span>";
            finalHTML += "<span>" + order.email + "</span>";
            finalHTML += "<span>" + order.size + "</span>";
            finalHTML += "<span>" + order.flavor + "</span>";
            finalHTML += "<span>" + order.strength + "</span>";
            return finalHTML += "</div>";
        };

        $("form").submit(function(e) { // *************** 2nd section created
            e.preventDefault();
            var currentOrder = {
                coffee: $("#coffeeOrder").val(),
                email: $("#emailInput").val(),
                size: $("input:checked").val(),
                flavor: $("#flavorShot").val(),
                strength: $("#strengthLevel").val(),
            };
            orders.push(currentOrder);

            // show the new order to the screen that only happens when hit submit // *************** 3rd section created
            var renderedHTML = renderCoffeeOrder(currentOrder);
            $("#orderList").append(renderedHTML); 

            // save the order list to localStorage  // *************** 4th section created
            var ordersJSON = JSON.stringify(orders);
            localStorage.setItem("coffeeOrders", ordersJSON);
        });
    });