// DEFINE UI VARIABLES
const taskform = document.querySelector(".taskinput");
const tasklist = document.querySelector(".collection");
const clearbtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskin = document.querySelector("#task");

//load all event listners
loadEventListeners();

function loadEventListeners(){
  document.addEventListener('DOMContentLoaded',getTasks);
  taskform.addEventListener('submit', addTask);
  tasklist.addEventListener('click', removeTask);
  clearbtn.addEventListener('click',clearall);
  filter.addEventListener('keyup' , filtertask);

}

function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')=== null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(task));
  const link = document.createElement('a');
  link.className = 'delete-item';
  li.appendChild(link);
  tasklist.appendChild(li);

  });

}



function addTask(e){
  let tasks;
  let flag = 0 ;
  if(localStorage.getItem('tasks')=== null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    if(taskin.value === task){
      flag = 1;
    }
  })
  if(flag === 1){
    alert('Task Already in List')
  }else{
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskin.value));
    const link = document.createElement('a');
    link.className = 'delete-item';
    li.appendChild(link);
    tasklist.appendChild(li);
    storeTaskInLocalStorage(taskin.value);
    taskin.value = '';
    e.preventDefault();

  }
  
}


function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')=== null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}



function removeTask(e){
  if(e.target.classList.contains('delete-item')){
     e.target.parentElement.remove();
     removeTaskFromLocalStorage
     (e.target.parentElement);
  } 
}

function removeTaskFromLocalStorage(taskItem){
  console.log(taskItem);
  if(localStorage.getItem('tasks')=== null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }  
  tasks.forEach(function(task,index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);

    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}



function clearall(e){
  // if(confirm('Remove All')){
  //   tasklist.innerHTML = '';
    while(tasklist.firstChild){
      tasklist.removeChild(tasklist.firstChild);
    }

    clearTasksFromLocalStorage()
  }

  function clearTasksFromLocalStorage(){
    localStorage.clear();
  }

  function filtertask(e){
    const text = e.target.value.toLowerCase();
 
    document.querySelectorAll('.collection-item').forEach
    (function(task){
      const item =task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else{
        task.style.display = 'none';
      }
    });
  }


