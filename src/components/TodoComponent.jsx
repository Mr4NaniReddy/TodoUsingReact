import React from "react";

function TodoComponent({taskName, deleteFunction, completeFunction})
{
    return(
        <>
        <li className="list_items d-flex justify-content-between mb-2">
            {taskName}

        <div className='functionbuttons d-flex gap-3'>
            <button className='btn btn-success completebtn' onClick={()=>{completeFunction(taskName)}}>Complete</button>
            <button className='btn btn-danger completebtn' onClick={()=>{deleteFunction(taskName)}}>Delete</button>
        </div>
        </li>
        </>
    )
}

export default TodoComponent