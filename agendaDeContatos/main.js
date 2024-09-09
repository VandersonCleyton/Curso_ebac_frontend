
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const tableBody = document.querySelector('#contactsTable tbody');

function isDuplicate(name, phone) {
    const rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells[0].textContent === name || cells[1].textContent === phone) {
            return true;
        }
    }
    return false;
}

contactForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name.length < 2) {
        alert('O nome deve ter pelo menos 2 caracteres.');
        return;
    }

    if (isDuplicate(name, phone)) {
        alert('O contato com esse nome ou telefone já está cadastrado.');
        return;
    }

    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = phone;

    contactForm.reset();

});
