const STORAGE_KEY = 'tableWithPerson';

var allPersons = [{
    name: "Magda",
    surname: "Surzynska"
}];


window.onload = () => {
    var previousTable = localStorage.getItem(STORAGE_KEY);
    if (previousTable != null) {
        allPersons = JSON.parse(previousTable);
    }
    generateList(allPersons);

    $('body').keypress(function (event) {
        if (event.keyCode == 13) {
            addPerson();
        };
    });
}

function addToLocalstorage() {
    var JsonAllPerson = JSON.stringify(allPersons);
    localStorage.setItem(STORAGE_KEY, JsonAllPerson);
}

function addPerson() {
    var newName = $('input#name');
    var name = newName.val();

    var newSurname = $('input#surname');
    var surname = newSurname.val();

    var person = {
        name: name,
        surname: surname
    }

    var findUser = allPersons.find(function (element) {
        return element.name == name && element.surname == surname;
    });

    if (findUser != undefined) {
        alert("This person already exist");
        return;
    }

    allPersons.push(person);

    generateList(allPersons);
    addToLocalstorage();

    newName.val('');
    newSurname.val('');
}

function generateList(tab) {
    $('#tbody').html('');
    for (let i = 0; i < tab.length; i++) {
        var $tr = $('<tr><td>' + tab[i].name + '</td><td>' + tab[i].surname + '</td><td>' + +'</td></tr>');
        $('#tbody').append($tr);
    }
}




