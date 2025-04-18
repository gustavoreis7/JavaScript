const inputnewTask = document.querySelector('.newTask');
const btnAdd = document.querySelector('.btnTask');
const task = document.querySelector('.task');

function criali() {
  const li = document.createElement('li');
  return li;
}
function limpaInput() {
  inputnewTask.value = '';
  inputnewTask.focus();
}

function criabtnApaga(li) {

  li.innerText += ' ';
  const btnapaga = document.createElement('button');
  btnapaga.innerText = 'apagar';
  btnapaga.setAttribute('class', 'apagar');
  btnapaga.setAttribute('title', 'apagar esta tarefa');
  li.appendChild(btnapaga);
}

function criatask(textoinput) {
  const li = criali();
  li.innerText = textoinput;
  task.appendChild(li);
  limpaInput();
  criabtnApaga(li);
  salvaTask();
}

function salvaTask() {
  const liTask = task.querySelectorAll('li');
  const listaTask = [];

  for (let task of liTask) {
    let tasktexto = task.innerText;
    tasktexto = tasktexto.replace('apagar', '').trim();
    listaTask.push(tasktexto);
  }
  const taskJSON = JSON.stringify(listaTask);
  localStorage.setItem('task', taskJSON);
}

inputnewTask.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputnewTask) return;
    criatask(inputnewTask.value);
  }

});

btnAdd.addEventListener('click', function () {
  if (!inputnewTask.value) return;
  criatask(inputnewTask.value);
});

function addTaskSalva() {
  const tarefas = localStorage.getItem('task');
  const listaTask = JSON.parse(tarefas);

  for (let tarefa of listaTask) {
    criatask(tarefa);
  }
}

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
  }

  salvaTask();
});
addTaskSalva();