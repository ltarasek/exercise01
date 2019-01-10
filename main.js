var allPersons = [{
    name: "Magda",
    surname: "Surzynska"
}];

window.onload = () => {
    
    generateList(allPersons);
}

function add() {

    var newName = $('input#name');
    var name = newName.val();

    var newSurname = $('input#surname');
    var surname = newSurname.val();

    var person = {
        name: name,
        surname: surname
    }
    allPersons.push(person);

    generateList(allPersons);

    newName.val('');
    newSurname.val('');

}

function generateList(tab) {
    $('#tbody').html('');
    for (let i = 0; i < tab.length; i++) {
        var $tr = $('<tr><td>' + tab[i].name + '</td><td>' + tab[i].surname + '</td><td>' + +'</td></tr>' );
        $('#tbody').append($tr);
    }
}

