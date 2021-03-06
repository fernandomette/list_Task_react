import React from "react";
import Tasks from ".";
import "./PropTask.css";
import { CgClose, CgInfo } from "react-icons/cg";


const PropTask = ({task, handleTaskClick, handleTaskDeletion}) => {

    return (
        <div 
            className="PropTask-container" 
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        >
            
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
				{task.title}
			</div>
            
            <div className="buttons-container">
				<button 
                className="remove-task-button" 
                onClick={() => handleTaskDeletion(task.id)}
				>
				<CgClose />
				</button>

				
			</div>
        </div>
        
    );
}

export default PropTask;