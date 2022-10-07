const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = (a, b) => {
    return ((b + ' ') + a.join(';' + b + ' ')).split(';');
}

console.log(addPrefix(names, 'Mr'));