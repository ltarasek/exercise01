const STORAGE_KEY = 'tableWithPerson';

var allPersons = [];


window.onload = () => {
    var previousTable = localStorage.getItem(STORAGE_KEY);
    if (previousTable != null) {
        allPersons = JSON.parse(previousTable);
    }
    generateList(allPersons, 500, 0);

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

    var newPhoneNumber = $('input#phoneNumber');
    var phoneNumber = newPhoneNumber.val();

    var newEmail = $('input#email');
    var email = newEmail.val();

    var newGender = $('#gender');
    var gender = newGender.val();

    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var currentData = (day) + "-" + (month) + "-" + now.getFullYear();

    var person = {
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        gender: gender,
        email: email,
        currentData: currentData
    }

    var findUser = allPersons.find(function (element) {
        return element.name == name && element.surname == surname;
    });

    if (findUser != undefined) {
        alert("This person already exist");
        return;
    }

    allPersons.push(person);

    generateList(allPersons, 500, 0);
    addToLocalstorage();

    newName.val('');
    newSurname.val('');
    newPhoneNumber.val('');
    newEmail.val('');
}

function generateList(tab, counter, startIndex) {

    $('#tbody').html('');
    for (let i = startIndex; i < counter + startIndex && i < tab.length; i++) {
        var $tr = `<tr><td>${tab[i].name}</td><td>${tab[i].surname}</td><td>${tab[i].gender}</td><td>${tab[i].phoneNumber}</td><td>${tab[i].email}</td><td>${tab[i].currentData}</td></tr>`;
        $('#tbody').append($tr);
    };

    
}




