var journal = [];

function addEntry(list, wasChange){
    journal.push({
        list: list,
        squirrel: wasChange
        
    });
}

addEntry(['one', 'two', 'three'], true);

console.log(journal[0]);