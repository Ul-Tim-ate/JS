'use strict';
let books = document.getElementsByClassName('book'),
	body = document.getElementsByTagName('body');
books[5].after(books[2]);
books[2].before(books[0]);
books[3].after(books[2]);
document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

let header = document.querySelectorAll('a'),
	adv = document.getElementsByClassName('adv'),
	secondBook = books[1].getElementsByTagName('li'),
	fifthBook = books[4].getElementsByTagName('li'),
	eigthBook = books[5].getElementsByTagName('li') ;

header[2].textContent = 'Книга 3. this и Прототипы Объектов';
adv[0].remove();


secondBook[3].after(secondBook[6]);
secondBook[4].after(secondBook[8]);
secondBook[9].after(secondBook[2]);

fifthBook[2].before(fifthBook[9]);
fifthBook[3].before(fifthBook[4]);
fifthBook[4].before(fifthBook[5]);
fifthBook[9].before(fifthBook[6]);


eigthBook[9].insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>');