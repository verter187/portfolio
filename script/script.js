"use strict";
//modal 
let modalTrigger = document.querySelectorAll('[data-modal]'),
    modalClose = document.querySelector('[data-close]'),
    modal = document.querySelector('.modal'),
    modalMenuTrigger = document.querySelectorAll('[data-modal-menu]'),
    modalMenuClose = document.querySelector('[data-menu-close]'),
    modalMenu = document.querySelector('.modal_menu');

modalTrigger.forEach((btn) => {
    btn.addEventListener('click', toggleModal);
    btn._overflow = 'hidden';
});

modalClose.addEventListener('click', toggleModal);

document.addEventListener("keyup", (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        toggleModal(e);
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        toggleModal(e);
    }
});

modalMenuTrigger.forEach((btn) => {
    btn.addEventListener('click', toggleModal);
    btn._elem = modalMenu;
});

modalMenuClose.addEventListener('click', toggleModal);
modalMenuClose._elem = modalMenu;

function toggleModal(e = undefined, elem = modal) {
    let overflow = 'visible';
    if (e && e.target.hasOwnProperty('_overflow')) {
        overflow = e.target._overflow;
    }
    if (e && e.target.parentElement.hasOwnProperty('_elem')) {
        elem = e.target.parentElement._elem;
    }
    if (e && e.target.hasOwnProperty('_elem')) {
        elem = e.target._elem;
    }

    elem.classList.toggle('show');

    document.body.style.overflow = overflow;
}