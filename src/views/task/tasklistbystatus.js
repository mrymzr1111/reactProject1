import { useContext, useEffect } from "react";
import { TaskStatusContext } from "../../store/context/taskstatuscontext";
import { taskContext } from "../../store/context/taskContext";

const TaskListbyStatus=()=>{
    const {selectedStatus}=useContext(TaskStatusContext);
      const{searchTaskListByStatus,filterTaskList}=useContext(taskContext);
      

      useEffect(() => {
       
        searchTaskListByStatus(selectedStatus.id);
      },[selectedStatus] );
      console.log("filterTaskList contents:", filterTaskList);
    return<div>
      <h2> tasklist by status:{selectedStatus?.statusName} </h2>
   <hr/>
   {
    
   filterTaskList && filterTaskList.map((value) => (
   
      <div key={value.id} className="filterDiv" style={{ backgroundColor: selectedStatus?.color }}>
          <p>{value.taskName}</p>
          <div className="overlay">
              <p>{value.taskName}</p>
              <p> Duration: {value.duration}</p>
          </div>
      </div>
  ))
  
   }
    </div>

   
}
export default TaskListbyStatus;