import { ToastContainer } from 'react-toastify';
import './App.css';
import { TaskStatusConsumer } from './store/context/taskstatuscontext';
import TaskPage from './views/task/taskpage';

import 'react-toastify/dist/ReactToastify.css';
import { Form , useForm } from 'react-hook-form';
import { TaskProvider } from './store/context/taskContext';
import { useCallback } from 'react';
import axios from 'axios';


const add=(a,b)=>{
  return new  Promise((Callbackfunction)=>{
  
    setTimeout(() => {
      let sum=0;
      sum=a+b;
    Callbackfunction(sum);
    }, 200);

  });}
  

const mul=(a,b)=>{
  return a*b;
}


function App() {

 // const testClick=async()=>{
       // copy URL on  axios.get() now inomation that comes from backend  
       //will be read and sent  to  response
       // const response = await axios.get("http://react.devesharp.ir/Task");
    ////console.log(response.data);
  //}

  return (
    <>
   
<button onClick={()=>{test()}}>
click
</button>
<TaskStatusConsumer>
  <TaskProvider>
  <TaskPage/>
  </TaskProvider> 
</TaskStatusConsumer>
<ToastContainer/>
   </> 



  );
}
export default App;
////appp2
// const App = () => {
//   const { handleSubmit, formState: { errors }, register } = useForm({ mode: 'all' });
//   const Apply = () => {
//     alert("salam");
//   }
//   return <div style={{ padding: 100 }}>
//     <Form onSubmit={handleSubmit(Apply)}>
//       <input id='first name' type='text'  {...register("firstName", { required: "first name is required " })} />
//       <button className='btn info'> apply</button>
//     </Form>

//   </div>
// }

// export default App;
