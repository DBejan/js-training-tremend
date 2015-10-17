/*
 * Itterate through an object to get all it's values
*/
function printValue (object, parentElement) {
    for (key in object)
    {
        var value = object[key];
        var container = document.createElement("div");
        container.className = key;
        if (typeof value === "string" || typeof value === "number") // If the value can be printed, do so
        {
            if (requirements.indexOf(key) != -1) // Make sure the value should be printed
            {
                container.textContent = value
            }
        }
        if (typeof value === "object") // If the object contains other objects, call the function again to get to the values
        {
            printValue(value, container)
        }
        parentElement.appendChild(container);
    }
}


/*
 * Razvan's function
*/
function createElement(element, container, attributes, properties) {
    if (container != null) {
        var elementContainer = document.createElement(container);
    }

    var el = document.createElement(element);

    for (var attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }

    for (var property in properties) {
        el[property] = properties[property];
    }

    if (container != null) {
        elementContainer.appendChild(el);
        return elementContainer;
    }

    return el;
}
