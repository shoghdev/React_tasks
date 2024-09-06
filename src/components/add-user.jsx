import {useForm} from 'react-hook-form'
export const AddUSer = () => {
    const {register,handleSubmit,formState:{errors}, reset} = useForm()
    const handleAdd = data => {
        console.log(data)
        reset()
    }
    return <>
        <h3>Add User</h3>
        <form onSubmit ={handleSubmit(handleAdd)}>
            <div>
                <input 
                    type="text"  
                    placeholder="name"
                    {...register("name", {required:"Please fill your name"})}
                />
                {errors.name && <p style={{color:"red"}}>{errors.name.message} </p>}
            </div>
           <div>
            <input 
                    type="text"  
                    placeholder="age"
                    {...register("age", {required:"Please fill your age"})}
                />
                {errors.age && <p style={{color:"red"}}>{errors.age.message} </p>}
            </div>
            <div>
                <input 
                    type="text"  
                    placeholder="selery"
                    {...register("selery", {required:"Please fill your selery"})}
                />
                {errors.selery && <p style={{color:"red"}}>{errors.selery.message} </p>}
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    </>
}