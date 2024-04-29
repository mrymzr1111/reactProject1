import { useContext } from "react";

// import { TextInput, NumberInput, SelectInput } from '../../Components/Form/Index'
import { useForm } from "react-hook-form";
import { TaskStatusContext } from "../../store/context/taskstatuscontext";
import{TextInput,NumberInput,SelectInput}from '../../component/Form/Index'
import { taskContext } from "../../store/context/taskContext";
const TaskForm = () => {
const { Add,task}=useContext(taskContext);
    const { statusTaskList} = useContext(TaskStatusContext);

    const { handleSubmit, formState: { errors }, register } = useForm({ mode:"all" });


    const onSubmit=(data)=>{
        Add(data);
    };
    const taskNameValidation=register("taskName", { required: "Task Name is Required" }) ;
    const durationValidation=register("duration",{required:"Duration is Required",
    max:{value:30,message:"Duration must be less than 30"}} );

    return <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={errors.taskName ? 'error input-group' : 'input-group'}>
                <TextInput id="taskName" description="Task Name" model={task}
                    validation={{ ...taskNameValidation}} />
                {errors.taskName && <p className='error-message'>{errors.taskName.message}</p>}
            </div>

            <div className={errors.duration ? 'error input-group' : 'input-group'}>
                <NumberInput id="duration" model={task} description="Duration" validation={{...durationValidation}}/>
                {errors.duration && <p className='error-message'>{errors.duration.message}</p>}
            </div>
            <SelectInput id="statusId" description="Task Status" model={task} text="statusName" list={statusTaskList} />

            <div>
                <button className="btn success">Register</button>
            </div>

        </form>
    </div>
}

export default TaskForm;