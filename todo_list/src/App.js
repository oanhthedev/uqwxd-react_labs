import React, {useState} from "react";
import "./App.css";
const App = () => 
{
    const [todos, setTodos] = useState([]);
    
      
    function handleSubmit(e)
    {
    e.preventDefault();
    let text= document.getElementById('todoAdd').value; 
    
    const newTodo = 
        { id: new Date().getTime() , 
        text: text,  update: false , completed: false 
        }; 

    setTodos ([...todos].concat(newTodo)); 
    document.getElementById('todoAdd').value =""; 
    } 

    
    function handleDelete(id)
    {
      setTodos ([...todos].filter((todo)=>todo.id!== id)); 
    } 
     

    function handleUpdate(Todo)
    {
      Todo.update=true; 
      setTodos([...todos].map((todo=>{ if(todo.id === Todo.id) {todo.update=Todo.update;} return todo} )));  
    }


    function handleSave(Todo)
    {
      setTodos ([...todos].map ((todo =>  
        { 
          if (todo.id === Todo .id) 
          { 
           todo.text= document.getElementById('savetb').value;
          } 
          return todo; 
        } ))); 
        document.getElementById('savetb').value =""; 
        Todo .update = false; 
    }

    function completeChange(Todo)
    {
      setTodos([...todos].map((todo=>
        { 
          if(todo.id === Todo .id) 
          {
            todo.completed=!Todo .completed;
          } 
          return todo
         } ))); 

    }
  return(
    
    <div className="App" id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" align="right" id='todoAdd' placeholder="Add a new task" />
        <button type="submit">Add Todo</button>
      </form>


      {todos.map((todo) => (
        
        <div className="todo" key={todo.id} >

          <div className="todo-text"> <input className="todo-completed" type="checkbox" id="completed" checked={todo.completed} onChange={() => completeChange(todo)} />

            {todo.update === true ?

              (<input type="text" id="savetb" defaultValue={todo.text} /> )
              :
              (<div > {todo.text} </div>)
            }
          </div>


          <div className="todo-actions">
            {todo.update === true ?

              (<button id="save" onClick={() => handleSave(todo)}>Save Todo</button>) 
              :
              (<button id="change" onClick={() => handleUpdate(todo)}>Updade Todo</button>)

            }
            <button onClick={() => handleDelete(todo.id)}>Delete Todo</button>
          </div>


      </div>))}

    </div>

  );
};
export default App;


