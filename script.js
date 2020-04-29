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
    saveLocalTodos(formInput.value)
    newItem.appendChild(newTodoText)

    completeBtn = document.createElement('button')
    completeBtn.classList.add('todo-complete')
    completeBtn.innerText = 'Done!'
    newItem.appendChild(completeBtn)

    removeBtn = document.createElement('button')
    removeBtn.classList.add('todo-remove')
    removeBtn.innerText = 'Delete'
    newItem.appendChild(removeBtn)

    formInput.value = ''
  } else {
    alert('write something!')
  }
}

const deleteCheck = (e) => {
  const item = e.target
  if (item.classList[0] === 'todo-remove') {
    const todo = item.parentElement
    removeLocalTodos(todo)
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
  todos.forEach((todoItem) => {
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
    }
  })
}

const saveLocalTodos = (localTodo) => {
  let todosArr
  if (localStorage.getItem('todosArr') === null) {
    todosArr = []
  } else {
    todosArr = JSON.parse(localStorage.getItem('todosArr'))
  }
  todosArr.push(localTodo)
  localStorage.setItem('todosArr', JSON.stringify(todosArr))
}

const getLocalTodos = () => {
  let todosArr
  if (localStorage.getItem('todosArr') === null) {
    todosArr = []
  } else {
    todosArr = JSON.parse(localStorage.getItem('todosArr'))
  }
  todosArr.forEach((itemTodo) => {
    const newItem = document.createElement('li')
    newItem.classList.add('todo-list-item')

    todoList.appendChild(newItem)
    newTodoText = document.createElement('span')
    newTodoText.innerText = itemTodo
    newTodoText.classList.add('todo-text')

    newItem.appendChild(newTodoText)
    completeBtn = document.createElement('button')
    completeBtn.classList.add('todo-complete')
    completeBtn.innerText = 'Done!'

    newItem.appendChild(completeBtn)
    removeBtn = document.createElement('button')
    removeBtn.classList.add('todo-remove')
    removeBtn.innerText = 'Delete'

    newItem.appendChild(removeBtn)
  })
}

const removeLocalTodos = (todo) => {
  let todosArr
  if (localStorage.getItem('todosArr') === null) {
    todosArr = []
  } else {
    todosArr = JSON.parse(localStorage.getItem('todosArr'))
  }
  todoIndex = todo.children[0].innerText
  todosArr.splice(todosArr.indexOf(todoIndex), 1)

  localStorage.setItem('todosArr', JSON.stringify(todosArr))
  console.log(todo.children[0].innerText)
}

document.addEventListener('DOMContentLoaded', getLocalTodos)
addBtn.addEventListener('click', addItem)
todoList.addEventListener('click', deleteCheck)
todoList.addEventListener('click', completeToggle)
filterOptions.addEventListener('click', filterTodo)
