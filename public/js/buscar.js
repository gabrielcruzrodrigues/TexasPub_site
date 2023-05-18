const lodash = require('lodash');

const listContainer = document.querySelector('#list');
const header = document.querySelector('#header');
const search = document.querySelector('#searchInput');

function searchInKeyUp() {
    console.log(search);
};

search.addEventListener('Keyup', lodash.debounce(searchInKeyUp, 400));