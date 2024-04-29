import { useContext } from "react";
import { TaskStatusContext } from "../../store/context/taskstatuscontext";

const HeaderMenu=()=>{
const{statusTaskList,selectStatus}=useContext(TaskStatusContext);
   return <header>
    <button className="tablink" onClick={()=>selectStatus(null)}>TaskMangement</button>
    {
        statusTaskList && statusTaskList.map(
            status=>(<button  onClick={()=>selectStatus(status)}
             key={status.id} className="tablink">{status.statusName}
                </button>)
   ) }

</header>

}
export  default HeaderMenu;