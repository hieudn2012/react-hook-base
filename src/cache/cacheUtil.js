const TUDO_LIST = 'TUDO_LIST';

function saveTodoListLocal(list) {
  localStorage.setItem(TUDO_LIST, JSON.stringify(list));
}

function getTodoListLocal() {
  return JSON.parse(localStorage.getItem(TUDO_LIST));
}

function clearTodoListLocal() {
  localStorage.removeItem(TUDO_LIST);
}

export {
  saveTodoListLocal,
  getTodoListLocal,
  clearTodoListLocal,
}