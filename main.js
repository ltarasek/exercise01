var allPersons = [{
    name: "Magda",
    surname: "Surzynska"
}];

window.onload = () => {
    
    generateList(allPersons);
}

function generateList(tab) {
    for (let i = 0; i < tab.length; i++) {
        var $tr = $('<tr><td>' + tab[i].name + '</td><td>' + tab[i].surname + '</td></tr>');
        $('#tbody').append($tr);
    }
}

