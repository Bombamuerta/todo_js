const formInput = document.querySelector('.form-input')
const addBtn = document.querySelector('.form-input-button')
const todoList = document.querySelector('.todo-list')
const filterOptions = document.querySelector('.filter-todo')

const addItem = (e) => {
  e.preventDefault()
  if (formInput.value !== '') {
    const newItem = document.createElement('li')
    newItem.classList.add('todo-list-item')
    todoList.appendChild(newItem)

    newTodoText = document.createElement('span')
    newTodoText.innerText = formInput.value
    newTodoText.classList.add('todo-text')
    newItem.appendChild(newTodoText)
    formInput.value = ''

    completeBtn = document.createElement('button')
    completeBtn.classList.add('todo-complete')
    completeBtn.innerText = 'done!'
    newItem.appendChild(completeBtn)

    removeBtn = document.createElement('button')
    removeBtn.classList.add('todo-remove')
    removeBtn.innerText = 'delete'
    newItem.appendChild(removeBtn)
  } else {
    alert('write something!')
  }
}

const deleteCheck = (e) => {
  const item = e.target
  if (item.classList[0] === 'todo-remove') {
    const todo = item.parentElement
    todo.remove()
  }
}

const completeToggle = (e) => {
  const item = e.target
  if (item.classList[0] === 'todo-complete') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
}

const filterTodo = (e) => {
  todos = todoList.childNodes
  console.log(todos)
  todos.forEach(function (todoItem) {
    switch (e.target.value) {
      case 'all':
        todoItem.style.display = 'flex'
        break
      case 'completed':
        if (todoItem.classList.contains('completed')) {
          todoItem.style.display = 'flex'
        } else {
          todoItem.style.display = 'none'
        }
        break
      case 'uncompleted':
        if (!todoItem.classList.contains('completed')) {
          todoItem.style.display = 'flex'
        } else {
          todoItem.style.display = 'none'
        }
        break
    }
  })
}

addBtn.addEventListener('click', addItem)
todoList.addEventListener('click', deleteCheck)
todoList.addEventListener('click', completeToggle)
filterOptions.addEventListener('click', filterTodo)