const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const resetButton = document.getElementById('resetButton');
const leftEmpty = empties[0];

// Loop through fill elements and add listeners
fills.forEach((fill) => {
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
});

// Loop through empty boxes and add listeners
empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});

// Drag Functions

function dragStart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('invisible'), 0);
}

function dragEnd(e) {
  e.target.classList.remove('hold', 'invisible');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('hovered');
}

function dragLeave(e) {
  e.target.classList.remove('hovered');
}

function dragDrop(e) {
  e.target.classList.remove('hovered');
  e.target.appendChild(document.querySelector('.hold'));
}

resetButton.addEventListener('click', reset);

function reset() {
  leftEmpty.append(...fills);
}