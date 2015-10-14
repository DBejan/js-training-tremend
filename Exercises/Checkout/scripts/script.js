/**
 * Here you have access to:
 * employees,
 * items,
 * orders
 *
 * Return final_prices
 */

var final_prices = [];

for (order in orders)
{
	var orderPrice = 0.0
	var orderId = orders[order]["id"];
	for (orderItem in orders[order]["items"])
	{
		var itemId = orders[order]["items"][orderItem]["item"];
		var orderQty = orders[order]["items"][orderItem]["quantity"];
		for (item in items)
		{
			if (itemId == items[item]["code"])
			{
				var itemCost = items[item]["cost"];
				break
			}
		};
		var orderItemCost = orderQty * itemCost;
		orderPrice += orderItemCost;
	};
	if (typeof orders[order]["employee"] != "undefined")
	{
		for (employee in employees)
		{
			if (employees[employee]["id"] == orders[order]["employee"])
			{
				var employeeDiscount = employees[employee]["discount"];
				break;
			}
		}

		if (employeeDiscount > 70)
		{
			orderPrice = false
		} else {
			console.log(orderPrice);
			orderPrice -= (orderPrice*employeeDiscount)/100;
		}
	}
	finalOrder = {
		order_id: orderId,
		cost: orderPrice
	};
	final_prices[order] = finalOrder;
	console.log(finalOrder);
};
console.log(final_prices);
