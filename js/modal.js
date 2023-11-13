// const modalButton = document.querySelector('.mainBoxMini1wrap2button1')
// const modal = document.querySelector('.modal')
// const modalBackdrop = document.querySelector('.modalBackdrop')
// const krestik = document.querySelector('.mainBoxMini1wrap2button1')
// const thankYou = document.querySelector('.thankYou')
// const modalContent = document.querySelector('.modalContent')

// const checkInp = document.querySelector('.checkInp')
// const checkNum = document.querySelector('.checkNum')
// const apply = document.querySelector('.modalApplyButton')

const outputModalMain = document.querySelector('.main__modal');

const modalMainButton1 = document.createElement('button');
const modalMainButton2 = document.createElement('button');

modalMainButton1.classList = 'modalMainButton1';
modalMainButton2.classList = 'modalMainButton2';

modalMainButton1.textContent = 'toggle';
modalMainButton2.textContent = 'check';

outputModalMain.append(modalMainButton1, modalMainButton2);

const outputModalBackdrop = document.querySelector('.modalBackdrop');
const modal = document.createElement('div');
const modalHeader = document.createElement('div');
const modalh2 = document.createElement('h2');
const modalp = document.createElement('p');
const modalContent = document.createElement('div');
const modalContentInput1 = document.createElement('input');
const modalContentInput2 = document.createElement('input');
const modalContentButton = document.createElement('button');
const thankYou = document.createElement('div');

modal.classList = 'modal';
modalHeader.classList = 'modalHeader';
modalh2.classList = 'modalh2';
modalp.classList = 'modalp';
modalContent.classList = 'modalContent';
modalContentInput1.classList = 'modalContentInput1';
modalContentInput2.classList = 'modalContentInput2';
modalContentButton.classList = 'modalContentButton';
thankYou.classList = 'thankYou';

modalh2.textContent = 'title';
modalp.textContent = 'X';
modalContentButton.textContent = 'apply';

modalHeader.append(modalh2, modalp);
modalContent.append(modalContentInput1, modalContentInput2, modalContentButton);
modal.append(modalHeader, modalContent, thankYou);
outputModalBackdrop.append(modal);

let time;

modalMainButton1.addEventListener('click', () => {
    outputModalBackdrop.classList.add('modalBackdropActive');
    modal.classList.add('modalActive');
    thankYou.innerHTML = '';
    modalContent.classList.remove('hideContent');
});

const removeModalClasses = () => {
    if(time) {
        clearTimeout(time)
    }
    outputModalBackdrop.classList.remove('modalBackdropActive')
    modal.classList.remove('modalActive')
}

outputModalBackdrop.addEventListener('click', removeModalClasses)
modalp.addEventListener('click', removeModalClasses)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})