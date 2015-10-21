
function createElement(element, container, attributes, properties, events) {
    var container = container || null;
    var attributes = attributes || {};
    var properties = properties || {};
    var events = events || {};

    if (container != null) {
        var elementContainer = (typeof container == 'object') ? container : document.createElement(container);
    }

    var el = document.createElement(element);

    for (var attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }

    for (var property in properties) {
        el[property] = properties[property];
    }

    for (var event in events) {
        el.addEventListener(event, events[event]);
    }

    if (container != null) {
        elementContainer.appendChild(el);
        return elementContainer;
    }

    return el;
}

function getCollection(id) {
    return extractObjectFromArrayByProperty(collections, 'id', id);
}

function getTag(id) {
    return extractObjectFromArrayByProperty(tags, 'id', id);
}

function getPart(id) {
    return extractObjectFromArrayByProperty(items, 'id', id);
}

function extractObjectFromArrayByPropertyFilter(arr, property, value) {
	return arr.filter(function (item) {
		return item[property] == value;
	});
}

console.log(extractObjectFromArrayByPropertyFilter(tags, 'id', 2));

function extractObjectFromArrayByProperty(arr, property, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][property] == value) {
            return arr[i];
        }
    }

    return null;
}

function hideshow(id, action) {
    if (action == "hide") 
    {
        id.style.display = "none";
    } else {
        if (action == "show")
        {
            id.style.display = "block"
        }
    }
}  

function addtag(id, input, button)
{
    id.style.display = "none"
    hideshow(input, "show")
    hideshow(button, "show")
}

function saveTag(id, input, button)
{
    submitTag(input)
    hideshow(input, "hide");
    hideshow(id, "hide")
    // show new tag
    hideshow(button, "show");
}

function getMaxTag() 
{	
	var max = -1;
	return tags.reduce(function (prev, current) {
		if (current.id > max) {
			max = current.id;
		}
		return max;
	});
}

function submitTag(input)
{
    value = input.value
    // look in tags
    // if value in there, return value
    var found =  extractObjectFromArrayByProperty(tags, "name", value);
    if (found != null) {
        return found.value;
    } else {
        tags.push({"id": getMaxTag()+1, "name": value})
    }
    
}