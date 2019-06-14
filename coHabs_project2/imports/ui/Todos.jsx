import React from 'react';

const Todos = ({todos, deleteTodoX, openPopUpX}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                
                <div className="collection-item" key={todo.id}>
                <div class="row">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                
                <span class="card-title"> {todo.content} </span>
                
                <p> 
                   {todo.showPopUp ? 
                   <div> Detail: {todo.popup}</div>
                   : null
                 }</p>
                 <div class="chip">
                     {todo.tag}
                <i class="close material-icons">close</i>
                </div>
        </div>
        <div class="card-action">
        <p class="center waves-effect waves-light btn-small" onClick={() => {deleteTodoX(todo.id)}}> Delete </p>
        <p class="center waves-effect waves-light btn-small" onClick={() => {openPopUpX(todo.id)}}> Details </p>
        </div>
      </div>
    </div>
  </div>
                    
                    </div>
            )
        })
    ) : (
    <p className="center"> You have no todo's left, yay! </p>
    )
    
    return(
        <div className="todos collection">
        {todoList}
        </div>
    )
}

export default Todos