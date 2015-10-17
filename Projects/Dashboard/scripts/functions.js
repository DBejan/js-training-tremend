function getValue (value, property) {
    if (typeof value === "string" || typeof value === "number")
    {
        if (requirements.indexOf(property) != -1)
        {
            var label = document.createElement("div");
            label.className = property;
    		label.textContent = value;
            itemDataContainer.appendChild(label);
            // don't use the global var here;
        }
    };

    if (typeof value === "object")
    {
        for (var prop in value)
        {
             getValue (value[prop], prop);
        }
    };
}

function foo (dataSet, data) {
    // ne uitam in date, cautam dupa id, intoarcem valoarea
    for (item in dataSet)
    {
        for (value in dataSet[item])
        {
            if (dataSet[item][value] == data)
            {
                return dataSet[item][value];
            }

        }
    }
}

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