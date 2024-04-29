
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { createContext, useReducer } from "react";

const TaskStatusContext=createContext([]);
const initialTaskStatusState={
    statusTaskList  :[
        //{ id: 1, statusName: "To Do",color:"#5cb85c" },
        //{ id: 2, statusName: "In Progress",color:"#2196F3"  },
        //{ id: 3, statusName: "Done",color:"#f44336"  },
       // { id: 4, statusName: "Archive",color:"#da190b"  }, 
    ],
    selectedStatus:null
    };

const reducer=(state,action)=>{
switch (action.type) {
   case 'selectStatus' :
    {
    return{...state,selectedStatus:action.payload}
    }
case "setTaskStatusList" :
    {
        return { ...state,  taskStatusList: action.payload }

    }
   
    default:
        break;
}
}
const TaskStatusConsumer=({children})=>{
//read from backend
//const statusTaskList=[
   // {id:1,statusName:"to do "},
    //{id:2,statusName:"in progress"},
    //{id:3,statusName:"done"},
    //{id:4,statusName:"archive"}];
    const [state,dispatch]=useReducer(reducer,initialTaskStatusState);
const { statusTaskList,selectedStatus,}=state;

   const searchTaskStatusList= async()=>{
    
const response = await axios.get("https://react.deversharp.ir/statusTask");
dispatch({type:"setTaskStatusList",payload:response.data});
}
const selectStatus=(staus)=>{
    dispatch({type:"selectStatus", payload:staus});
}
   return  <TaskStatusContext.Provider 
    value={{ statusTaskList:statusTaskList,selectedStatus,selectStatus,searchTaskStatusList}}   >
 
{children}
   </TaskStatusContext.Provider>
}





export{TaskStatusContext,TaskStatusConsumer};