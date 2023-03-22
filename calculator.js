let outScreen = document.querySelector('.output input');
mode = 'calc';

function insert(num) {
  outScreen.value += num;
  if (mode == 'equal') {
    outScreen.value = '';
    outScreen.value += num;
    mode = 'calc';
  };
};

function clr() {
  outScreen.value = '';
};

function del() {
  outScreen.value = outScreen.value.slice(0, -1);
  if (mode == 'equal') {
    outScreen.value = '';
  };
};

function calc() {
  try {
    outScreen.value = eval(outScreen.value);
    mode = 'equal';
  } catch (err) {
    outScreen.value = 'INVALID';
    mode = 'equal';
  };
};

let menuIcon = document.querySelector('.icon'),
  menu = document.querySelector('.menu');

menuIcon.onclick = function() {
 menu.classList.toggle('open');
};

let blueTheme = document.querySelector('.blue'),
BrownTheme = document.querySelector('.Brown');
blueTheme.onclick = function() {
  document.body.classList.remove('Brown');
  document.body.classList.add('blue');
  menu.classList.remove('open');
};

BrownTheme.onclick = function() {
  document.body.classList.remove('blue');
  document.body.classList.add('Brown');
  menu.classList.remove('open');
};
