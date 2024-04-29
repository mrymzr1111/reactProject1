
import '../../component/modal/modal.css'
import TaskForm from "./taskform";
import TaskListView from "./tasklistview";
import Modal from '../../component/modal/modal';
//import { success, warning } from '../../utilities/alert/alert';
import { useContext, useReducer } from 'react';
import { taskContext } from '../../store/context/taskContext';


const TaskMangement=()=>{
  const{showModal,newTask,hideModal}=useContext(taskContext)
return (<>

  <h3>task mangement </h3>
  < div className='container'>
    <button className="btn success " onClick={() => { newTask() }}>regiister</button></div>
  <hr />
  <TaskListView />



  <Modal show={showModal} title="task register" hide={() => { hideModal() }}>
    <TaskForm  />
  </Modal>
</>)}




export default TaskMangement;
