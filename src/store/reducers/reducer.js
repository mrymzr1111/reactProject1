const taskReducer = (state, action) => {
    switch (action.type) {
      case "Add": {
      const{task,taskList}=state;
        if (task.id === 0) {
          let id = 1;
          if (taskList.length !== 0) {
            id = taskList[taskList.length - 1].id + 1;
          }
          //i added these code
          const newTask ={...task,id:id};
          //task.id = id;
  
       
          return {
            ...state,taskList:[...taskList,newTask], showModal: false,
            task: { id: 0, taskName: "", duration: 0, statusId: 1 }
          }
        
        } else {
          //edit
          const index = taskList.findIndex(value => value.id === task.id);
          if (index !== -1) {
            //added these codes
            const updatedTaskList=[...taskList];
            //updatedTaskList[index]=task;
            //taskList[index] = task;
            return {
              ...state, taskList: updatedTaskList, showModal: false,
              task: { id: 0, taskName: "", duration: 0, statusId: 1 }
            }
          }
          else{
            return state;
          }
        }
      }
      case "newTask":{
  return{...state,showModal:true, task: { id: 0, taskName: "", duration: 0, statusId: 1 }}
  
      }
      case "hideModal":{
  return{...state,showModal:false}
      }
  case "remove" :{
  
    const{taskList}=state;
    const index=taskList.findIndex(value=>value.id===action.payload);
    if (index!==-1) {
      const updatedTaskList=[...taskList];
  updatedTaskList.splice(index,1);
    return{...state,taskList:updatedTaskList}
    }
    return state;
    //taskList.splice(action.payload,1);
    //return{...state,taskList:taskList}
    //i changed the codes 
  ///taskList.splice(index,1);
    //const updatedTaskList= taskList.filter((task) => task.id !== action.payload);
    
      //taskList.splice(index,1);
     // return{...state,taskList:updatedTaskList};
    
  }
  case "openTaskEditForm":{
  const {taskList}=state;
  const temp=taskList.find(value=>value.id===action.payload)
 
   if (temp) {
    return{...state,task:temp,showModal:true} 
   } else {
    return state;
   }
  

  }
  case "searchTaskListByStatus":
    

    return{...state,filterTaskList:action.payload}
  
  
 

  
      default:
        return state;
    }
  }
  export default taskReducer;