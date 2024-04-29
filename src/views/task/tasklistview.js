import { useContext, useEffect } from "react";
import { TaskStatusContext } from "../../store/context/taskstatuscontext";
import { taskContext } from "../../store/context/taskContext";


const TaskListView=()=>{
const{statusTaskList}=useContext(TaskStatusContext);
const{remove,openTaskEditForm,taskList}=useContext(taskContext);




const findStatusName=(statusId)=>{
const status=statusTaskList.find((val)=>val.id===statusId);
if (status) 
    return status.statusName;
return;

    }
return<table className="table">
    <thead>
<tr className="header">
    <th>taskName</th>
    <th> duration</th>
    <th>task status</th>
    <th>...</th>
</tr>
    </thead>
    <tbody>
{
 taskList  && taskList.map((value)=><tr className="header" key={value.id}>
        <td> {value.taskName}</td>
        <td> {value.duration} </td>
        <td> {findStatusName(value.statusId)}</td>
        <td> 
        <span className="fa fa-edit text-success"  onClick={()=>{openTaskEditForm(value.id);}}></span>
        <span className=" fa fa-trash text-success" onClick={()=>{remove(value.id);}}></span>
        </td>
       
    </tr>)
}
    </tbody>
   </table>
}
export default TaskListView;