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