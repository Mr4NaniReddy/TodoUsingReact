import { useState } from 'react'
import TodoComponent from './components/TodoComponent'
import './App.css'

function App() {
  const [newTask, setnewTask] = useState("");
  const [tasklist, settasklist] = useState(["Swimming","Dancing","Playing", "Farming"]);
  const [taskcompleted, settaskcompleted] = useState([]);

  function handleInput(e)
  {
    let newvalue = e.target.value;
    setnewTask(newvalue);
  }

  function addTask()
  {
    if(!newTask.trim()){
      return
    }
    settasklist(prev=>[...prev, newTask])
    setnewTask("")
  }
  function ondelete(taskname)
  {
    let newTasklist = tasklist.filter(x=>x!=taskname)
    settasklist(newTasklist);
  }
  function onComplete(taskname)
  {
    let completedtasks = tasklist.filter(x=>x == taskname)
    ondelete(taskname)
    settaskcompleted(prev=>[...prev, completedtasks[0]])
  }
  return (
    <>
      <div className="mainbody">
        <div className="todo_list_body">
          <h1 className='MainTitle'>My Todo List</h1>
          <div>
            <div className="todo_task_input_div">
              <div className="form-floating w-75">
                <input type="text" className="form-control" id="todoinputfield" placeholder="enter here" onChange={(e)=>{
                  handleInput(e)
                }} value={newTask}/>
                <label htmlFor="todoinputfield" class="form-label">Enter todo</label>
              </div>
              <button className='btn btn-primary addbtn' onClick={()=>{
                addTask()
              }}>+</button>
            </div>
            <div>
              <h4 className='ms-3'>Pending Todos</h4>
              <ul className='Mylist'>
                {
                  tasklist.map((task,index)=>
                   <TodoComponent taskName={task} key={index} deleteFunction={ondelete} completeFunction={onComplete}/>
                  )
                }
              </ul>
              <hr></hr>
              <ul className='Mylist'>
                {
                   taskcompleted.map((task,index)=>
                   <TodoComponent taskName={task} key={index} deleteFunction={ondelete} completeFunction={onComplete}/>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
