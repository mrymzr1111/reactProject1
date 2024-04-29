import { createContext, useReducer } from "react";
import { success, warning } from "../../utilities/alert/alert";
import taskReducer from "../reducers/reducer";

const taskContext=createContext(null);
const initialTaskState={
taskList:[],
showModal:false,
task:{id:0,taskName:"",duration:0,statusId:1},
filterTaskList:[],
};
   const TaskProvider=({children})=>{
    
      const [state, dispatch] = useReducer(taskReducer,initialTaskState);
      const {taskList,showModal,task,filterTaskList} = state;
      // const [taskList, setTaskList] = useState(initialTaskList);
      // const [showModal, setShowModal] = useState(false);
      // const [task, setTask] = useState({ id: 0, taskName: "", duration: 0, statusId: 1 });
    
    
      const Add = () => {
     dispatch({type:"Add",payload:task});
        // if (task.id === 0) {
        //   let id = 1;
        //   if (taskList.length !== 0) {
        //     id = taskList[taskList.length - 1].id + 1;
        //   }
        //   task.id = id;
        //setTaskList([...taskList, task]);
        //setShowModal(false);
        success('registered');
    
      }
      //edit
      // else {
      //   const index = taskList.findIndex(value => value.id === task.id);
      //   if (index !== -1) {
      //     const temp = [...taskList];
      //     temp[index] = task;
      //      //setTaskList([...temp]);
      //     //setShowModal(false);
    
    
      //   }
      //setTask({ id: 0, taskName: "", duration: 0, statusId: 1 });
    //}
    //}
    const remove = (id) => {
      if (!window.confirm("are you sure you want to remove this task "))
        return;
        dispatch({type:"remove",payload:id});
        warning(' task has been deleted');
    // return {...state,taskList:updatedTaskList};
        // const index = taskList.findIndex((value) => value.id === id)
        // if (index !== -1) {
        //   const temp = [...taskList];
        //   temp.splice(index, 1);
         // setTaskList([...temp]);
      
    
    
      }
    
    const openTaskEditForm= (id) => {
    
      // const temp = taskList.find(value => value.id === payload)
      // if (temp) {
      //   //  setTask({ ...task });
      //   console.log(task);
      //   // setShowModal(true);
        dispatch({type:"openTaskEditForm",payload:id});
      }
    //}
    
    const newTask = () => {
      // setShowModal({ id: 0, taskName: "", duration: 0, statusId: 1 });
      //setShowModal(true);
      dispatch({ type: "newTask" });
    
    }
    const hideModal = () => {
      //setShowModal(false);
      dispatch({type:"hideModal"});
    }
  
  const searchTaskListByStatus=(statusId)=>{
 const tempList=state.taskList.filter((task) =>task.statusId===statusId);
 dispatch({type:"searchTaskListByStatus",payload:tempList});
   }

return<taskContext.Provider  value={{taskList,showModal,task,filterTaskList , hideModal,newTask,openTaskEditForm,
remove,Add,searchTaskListByStatus}}>
{children}
</taskContext.Provider>
  }

  export{taskContext,TaskProvider};