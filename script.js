const formInput = document.querySelector('.form-input')
const addBtn = document.querySelector('.form-input-button')
const todoContainer = document.querySelector('.todo-container')

const addItem = (e) => {
  e.preventDefault()
  if (formInput.value !== '') {
    const newItem = document.createElement('li')
    newItem.classList.add('todo-list-item')
    todoContainer.appendChild(newItem)

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

addBtn.addEventListener('click', addItem)
todoContainer.addEventListener('click', deleteCheck)
todoContainer.addEventListener('click', completeToggle)
