const removeFromArray = function() {
    const args = Array.from(arguments);
    const arr = args[0];
    let update = [];
    for (elem of arr) {
        if (!args.includes(elem)) {
            update.push(elem)
        }
    }
    return update;
};

// Do not edit below this line
module.exports = removeFromArray;
