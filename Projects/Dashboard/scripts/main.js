

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

for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var itemContainer = document.createElement("li");
    var itemDataContainer = document.createElement("ul");
    var idContainer = document.createElement("li");
    var nameContainer = document.createElement("li");
    var descriptionContainer = document.createElement("li");
    var fileTypesContainer = document.createElement("li");

    /**
     * innerHtml - only for html content
     * innerText - not supported by firefox
     * textContent - purrrfect
     */

    idContainer.textContent = item.id;
    nameContainer.textContent = item.name;
    descriptionContainer.textContent = item.details.description;
    var fileTypes = item.filesTypes;


    //iterate through fileTypes
    for (var j= 0; j< fileTypes.length; j++) {
        var fileType = fileTypes[j];
        var fileTypeContainer = document.createElement("ul");

        var fileTypeFileName = createElement("li", null, {}, {"textContent": fileType.filename});
        fileTypeContainer.appendChild(fileTypeFileName);

        var fileTypeExtension = createElement("li", null, {}, {"textContent": fileType.extension});
        fileTypeContainer.appendChild(fileTypeExtension);

        var fileTypeDistributionContainer = document.createElement("li");
        for(var k=0; k<fileType.distributions.length;k++) {
            var distribution = fileType.distributions[k];
            var distributionList = document.createElement("ul");

            var distributionName = createElement("li", null, {}, {"textContent": distribution.name});
            var distributionPrice = createElement("li", null, {}, {"textContent": distribution.price});

            distributionList.appendChild(distributionName);
            distributionList.appendChild(distributionPrice);
            fileTypeDistributionContainer.appendChild(distributionList);
        }


        fileTypeContainer.appendChild(fileTypeDistributionContainer);
        fileTypesContainer.appendChild(fileTypeContainer);
    }

    var collectionContainer =  document.createElement("li");
    for (collection in item.collections)
    {
        console.log(foo(collections, id));
    }

    var collectionName



    //append data to item
    // itemDataContainer.appendChild(idContainer);
    itemDataContainer.appendChild(nameContainer);
    itemDataContainer.appendChild(descriptionContainer);
    itemDataContainer.appendChild(fileTypesContainer);
    itemDataContainer.appendChild(collectionContainer);


    var checkboxContainer = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox_item");
    checkboxContainer.appendChild(checkbox);
    itemDataContainer.appendChild(checkboxContainer);

    itemContainer.appendChild(itemDataContainer);
    itemsContainer.appendChild(itemContainer);
}


dataContainer.appendChild(itemsContainer);
