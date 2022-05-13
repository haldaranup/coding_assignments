import { legacy_createStore as createStore } from 'redux';

const reducer = (store, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...store, todos: [...store.todos, action.payload] };

    default:
      return store;
  }
};

const initState = {
  todos: []
};

const store = createStore(reducer, initState);

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  let inpTex = document.getElementById('text').value;
  store.dispatch({ type: 'ADD_TODO', payload: { text: inpTex, status: false } });
  displayTodos();
});

function displayTodos() {
  document.getElementById('todosLis').innerHTML = "";
  const todoLis = document.getElementById('todosLis');
  store.getState().todos.forEach(ele => {
    const liELe = document.createElement('div');
    liELe.setAttribute('class', 'liEle');
    const liTex = document.createElement('h4');
    liTex.innerText = ele.text;
    const status = document.createElement('p');
    status.innerText = ele.status ? 'done' : 'pending';
    liELe.append(liTex, status);
    todoLis.append(liELe);
  });
}


