/*
 * Return an element with the collection name, based on the id
 * collectionId [str] = the id of the desiered collection
*/
function printCollectionName(collectionId)
{
    return createElement("span", {"data-col-id": collectionId}, {"textContent": getDataById(collections, collectionId), "className": "itemCollections itemCollection"});
}


/*
 * Return an element with the tag name, based on the id
 * tagId [str] = the id of the desiered tag
*/
function printTagName(tagId)
{
    return createElement("span", {"data-tag-id": tagId}, {"textContent": getDataById(tags, tagId), "className": "itemTags itemTag"});
}


/*
 * Return an element with the part name, based on the id
 * partId [str] = the id of the desiered part
*/
function printPartName(partId)
{
    return createElement("span", {"data-item-id": partId}, {"textContent": getDataById(items, partId), "className": "itemParts itemPart"});    // TODO: Debug
}


/*
 * Search an array of objects and return the value for name, for a specific id
 * dataSet [array] = array of objects, each conaining id and name
 * id [str] = the id of the desiered value
*/
function getDataById (dataSet, id) 
{
    for (object in dataSet)
    {
        for (data in dataSet[object])
        {
            if (data == "id")
            {
                return dataSet[object]["name"];
            }

        }
    }
}


/*
 * Razvan's function (edited for eficiency)
 * Creates an element in the document with the given atributes and properties
 * element [str] = element type
 * attributes [obj] = list of atributes containing type as key and attribute as value
 * properties [obj] = list of properties containing type as key and property as value
 * 
*/
function createElement(element, attributes, properties) {
    var el = document.createElement(element);

    for (var attr in attributes) 
    {
        el.setAttribute(attr, attributes[attr]);
    }

    for (var property in properties) 
    {
        el[property] = properties[property];
    }

    return el;
}