import {  useContext, useEffect} from "react";
import HeaderMenu from "./headermenu";
import TaskMangement from "./taskmanagement";
import TaskListbyStatus from "./tasklistbystatus";
import { taskContext } from "../../store/context/taskContext";
import { TaskStatusContext } from "../../store/context/taskstatuscontext";


 const TaskPage=({taskList})=>{
// const statusTaskList=[
// {id:1,statusName:"to do "},
// {id:2,statusName:"in progress"},
// {id:3,statusName:"done"},
// {id:4,statusName:"archive"}];

    
const {searchTaskListByStatus}= useContext(taskContext);
const{selectedStatus,searchTaskStatusList}=useContext(TaskStatusContext);
useEffect(()=>{
   searchTaskListByStatus();
},[]);
return(
<div className="container">
 
   <HeaderMenu />
   {
    selectedStatus ? <TaskListbyStatus/>:<TaskMangement taskList={taskList}  />
   }
   
 
   
    
</div>

)
}
export default TaskPage;