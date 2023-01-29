
const contactInput = document.getElementById('contact-input');
const contactbtn = document.getElementById('contact-title');
const sendbtn = document.getElementById('send');
const userEmail = document.getElementById('user');
const usertxt = document.getElementById('txtu');
const ciastka = document.getElementById('ciastka');
const ciastkaClose = document.getElementById('closeBtn');

function close() {
    if(ciastka.style.display === 'block') {
        ciastka.style.display = 'none'
    } else {
        ciastka.style.display = 'none'
    }
};

function press() {
    if(contactInput.style.display === 'block') {
        contactInput.style.display = 'none';
        contactbtn.innerHTML = 'Kliknij mnie';
    } else {
        contactInput.style.display = 'block';
        contactbtn.innerHTML = 'Napisz wiadomość';
    }
};

function ani() {
    if(sendbtn.className === 'send') {
        sendbtn.className = 'sendAnim';
        setTimeout(() => {
            sendbtn.className = 'send'
        }, 600);
    } else {
        sendbtn.className = 'send'
    }
};

function email() {
    if (userEmail.value === '' & usertxt.value != '') {
        sendbtn.innerHTML = 'Wprowadź e-mail';
        setTimeout(() => {
            sendbtn.innerHTML = 'Wyślij wiadomość'
        }, 1500);
    }
    if (usertxt.value === '' & userEmail.value != '') {
        sendbtn.innerHTML = 'Wprowadź wiadomość';
        setTimeout(() => {
            sendbtn.innerHTML = 'Wyślij wiadomość'
        }, 1500);
    }
    if (usertxt.value === '' & userEmail.value === '') {
        sendbtn.innerHTML = 'Wprowadź e-mail i wiadomość';
        setTimeout(() => {
            sendbtn.innerHTML = 'Wyślij wiadomość'
        }, 1500);
    }
    if (userEmail.value != '' & usertxt.value != '') {
        sendbtn.innerHTML = 'Wiadomość wysłana';
        setTimeout(() => {
            sendbtn.innerHTML = 'Wyślij wiadomość'
            userEmail.value = '';
            usertxt.value = '';
        }, 1500);
    }
};

function am() {
    email();
    ani();
};

contactbtn.addEventListener("click", press);
sendbtn.addEventListener("click", am);
ciastkaClose.addEventListener('click', close);