const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const tableBody = document.querySelector('#contactsTable tbody');
const errorAlert = document.getElementById('errorAlert');

function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

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
    let phone = phoneInput.value.trim();

    errorAlert.style.display = 'none';
    errorAlert.textContent = '';

    if (name.length < 2) {
        errorAlert.style.display = 'block';
        errorAlert.textContent = 'O nome deve ter pelo menos 2 caracteres.';
        return;
    }

    phone = formatPhoneNumber(phone);

    if (isDuplicate(name, phone)) {
        errorAlert.style.display = 'block';
        errorAlert.textContent = 'O contato com esse nome ou telefone já está cadastrado.';
        return;
    }

    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = phone;

    contactForm.reset();
});