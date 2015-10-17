var dataContainer = document.querySelector("#data");

var itemsContainer = document.createElement("div");

var mainCheckbox = document.createElement("input");
mainCheckbox.setAttribute("type", "checkbox");
mainCheckbox.addEventListener("change", function() 
{
    var checkboxes = document.querySelectorAll(".checkbox_item");
    console.log(mainCheckbox.checked);
    for (var i = 0; i < checkboxes.length; i++) 
    {
        // add check for checkbox
        checkboxes[i].checked = mainCheckbox.checked;
    }
});

dataContainer.appendChild(mainCheckbox);

for (i in items) 
{
    var item = items[i];

    var itemContainer = document.createElement("div");  // Main container
    var itemDataContainer = document.createElement("div");  // Data conainer

    // Add the checkbox
    var checkboxContainer = document.createElement("span");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox_item");
    checkboxContainer.appendChild(checkbox);
    itemDataContainer.appendChild(checkboxContainer);
    itemContainer.appendChild(itemDataContainer);
    itemsContainer.appendChild(itemContainer);

    // Add item name
    var nameContainer = createElement("span", {}, {"textContent": item.name, "className": "itemName"});
    itemDataContainer.appendChild(nameContainer);

    // Add item description
    var descriptionContainer = createElement("span", {}, {"textContent": item.details.description, "className": "itemDetails itemDescription"});
    itemDataContainer.appendChild(descriptionContainer);

    // Add item file types
    var fileTypesContainer = document.createElement("div"); // Container for all file types
    fileTypesContainer.className = "fileTypes";
    var fileTypes = item.filesTypes;
    for (j in fileTypes) 
    {
        var fileType = fileTypes[j];
        var fileTypeContainer = document.createElement("div");  // File type container
        fileTypesContainer.className = "fileTypes fileType";
        
        // Add file name
        var fileTypeFileName = createElement("span", {}, {"textContent": fileType.filename, "className": "fileTypes fileType fileName"});
        fileTypeContainer.appendChild(fileTypeFileName);
        
        // Add file extension
        var fileTypeExtension = createElement("span", {}, {"textContent": fileType.extension, "className": "fileTypes fileType fileExtension"});
        fileTypeContainer.appendChild(fileTypeExtension);

        // Add distribution details
        var fileTypeDistributionContainer = document.createElement("div");  // Container for all distribuiton details
        fileTypeDistributionContainer.className = "fileTypes fileType fileDistributionOptions";
        for(k in fileType.distributions)
        {
            var distribution = fileType.distributions[k];
            var distributionList = document.createElement("div");   // Distribution container
            distributionList.className = "fileTypes fileType fileDistributionOptions";
            // Add distribution name
            var distributionName = createElement("span", {}, {"textContent": distribution.name, "className": "fileTypes fileType fileDistributionOptions fileDistributionOptionName"}); 
            distributionList.appendChild(distributionName);
            // Add distribution price
            var distributionPrice = createElement("span", {}, {"textContent": distribution.price, "className": "fileTypes fileType fileDistributionOptions fileDistributionOptionPrice"});
            distributionList.appendChild(distributionPrice);

            fileTypeDistributionContainer.appendChild(distributionList);    // Append distribution details
        };
        fileTypeContainer.appendChild(fileTypeDistributionContainer);

        fileTypesContainer.appendChild(fileTypeContainer);
    };
    itemDataContainer.appendChild(fileTypesContainer);

    // Add collection details
    var collectionContainer =  document.createElement("div");   // Collections container
    collectionContainer.className = "itemCollections";
    for (collection in item.collections)
    {
        var collectionId = item.collections[collection];
        var collectionName = createElement("span", {"data-col-id": collectionId}, {"textContent": getDataById(collections, collectionId), "className": "itemCollections itemCollection"});
        collectionContainer.appendChild(collectionName);
    };
    itemDataContainer.appendChild(collectionContainer); // Append collection details

    // Add tags details
    var tagsContainer =  document.createElement("div");   // Tags container
    tagsContainer.className = "itemTags";
    for (tag in item.tags)
    {
        var tagId = item.tags[tag];
        var tagName = createElement("span", {"data-tag-id": tagId}, {"textContent": getDataById(tags, tagId), "className": "itemTags itemTag"});
        tagsContainer.appendChild(tagName);
    };
    // TODO: Add "Add tag" button
    itemDataContainer.appendChild(tagsContainer); // Append tags details

    // Add parts details
    var partsContainer =  document.createElement("div");   // Parts container
    partsContainer.className = "itemParts";
    for (part in item.parts)
    {
        var partId = item.parts[part];
        var partName = createElement("span", {"data-item-id": partId}, {"textContent": getDataById(items, partId), "className": "itemParts itemPart"});    // TODO: Debug
        partsContainer.appendChild(partName);
    };
    itemDataContainer.appendChild(partsContainer); // Append parts details
};


dataContainer.appendChild(itemsContainer);
