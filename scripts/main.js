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
            var finalHTML = "<div class='order' data-id='" + order.id + "'>"; // ****** added data-id after creating order.id

            finalHTML += "<span>" + order.coffee + "</span>";
            finalHTML += "<span>" + order.email + "</span>";
            finalHTML += "<span>" + order.size + "</span>";
            finalHTML += "<span>" + order.flavor + "</span>";
            finalHTML += "<span>" + order.strength + "</span>";
            finalHTML += "<button class='delete'>X</button>";   // ******* added b/w 8 and 9th section
            return finalHTML += "</div>";
        };

        $("form").submit(function(e) { // *************** 2nd section created
            e.preventDefault();
            var currentOrder = {
                id: new Date(), // ******************* added after 9th section, return string with current timestamp
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

        // $(.delete).click(function() {}) ----- doesn't allow you to reuse the button
        // the orderList method will always work AND allows you to zoom into delete

        $("#orderList").on("click", ".delete", function () { // ************** 9th section added
            // .parent takes what you selected (Div class="order")
            // (this) references the HTML that is the delete button

            // remove the right order object from orders ************ 10th section added
            var idToDelete = $(this).parent().data("id");

            // remove  sure the order ges removed form our orders array
            orders = orders.filter(function(currentOrder) {
                return currentOrder.id != idToDelete; // allows us to not save the items we want to delete
            });
            // make sure the order gets removed from localStorage too
            var ordersJSON = JSON.stringify(orders);
            localStorage.setItem("coffeeOrders", ordersJSON);

            // remove order from screen ***** added with 9th section
            $(this).parent().remove();
        });

    });