// state
    $(function() {
        var orders = [];

        function renderCoffeeOrder(order) {
            var finalHTML = "<div class='order'>";

            finalHTML += "<span>" + order.coffee + "</span>";
            finalHTML += "<span>" + order.email + "</span>";
            finalHTML += "<span>" + order.size + "</span>";
            finalHTML += "<span>" + order.flavor + "</span>";
            finalHTML += "<span>" + order.strength + "</span>";
            return finalHTML += "</div>";
        };

// action

        $("form").submit(function(e) {
            e.preventDefault();

            var currentOrder = {
                coffee: $("#coffeeOrder").val(),
                email: $("#emailInput").val(),
                size: $("input:checked").val(),
                flavor: $("#flavorShot").val(),
                strength: $("#strengthLevel").val(),
            };

            orders.push(currentOrder);

            var renderedHTML = renderCoffeeOrder(currentOrder);

            $("#orderList").append(renderedHTML);

            console.log(orders);
        });

        $("orderList").on("click", ".delete", (function() {

        }));
    });
