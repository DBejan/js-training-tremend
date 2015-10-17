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
            if (dataSet[object][data] == id)
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