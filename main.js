var allPersons = [{
    name: "Magda",
    surname: "Surzynska"
}];

window.onload = () => {

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

}