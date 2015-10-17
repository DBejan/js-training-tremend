requirements = ["name", "description", "filename", "extension", "price"];

var dataContainer = document.querySelector("#data");

var itemsContainer = document.createElement("ul");

var mainCheckbox = document.createElement("input");
mainCheckbox.setAttribute("type", "checkbox");
mainCheckbox.addEventListener("change", function() {
    var checkboxes = document.querySelectorAll(".checkbox_item");
    console.log(mainCheckbox.checked);
    for (var i = 0; i < checkboxes.length; i++) {
        // add check for checkbox
        checkboxes[i].checked = mainCheckbox.checked;
    }
});

dataContainer.appendChild(mainCheckbox);

for (var i = 0; i < items.length; i++) 
{
    var itemDataContainer = document.createElement("div");
    
    var checkboxContainer = document.createElement("div");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox_item");
    checkboxContainer.appendChild(checkbox);
    itemDataContainer.appendChild(checkboxContainer);

    var itemContainer = document.createElement("div");

    var item = items[i];
    getValue(item);


    itemContainer.appendChild(itemDataContainer);
    itemsContainer.appendChild(itemContainer);
}

dataContainer.appendChild(itemsContainer);

//Razvan's function

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

// var fileTypeNode = createElement("li", null, {}, {"textContent": fileType["filename"]});
// var checkbox = createElement("input", "li", {
//         "type": "checkbox",
//         "class": "itemCheckbox"
//     });
