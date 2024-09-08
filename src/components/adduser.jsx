import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup'
import { UserContext } from "../context"
import { useContext } from "react"
import PropTypes from 'prop-types'

const schema = yup
    .object()
    .shape({
        name: yup.string("Name must be a string").required('Name is required'),
        surname: yup.string().required('Surname is required'),
        age: yup.number('Age must be a `number`').required('Age is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    })
    .required()

export const AddUser = () => {
    const {onAdd} = useContext(UserContext)

    const {register, handleSubmit, formState: { errors }, reset} = useForm({
            resolver: yupResolver(schema),
    })

    const onSubmit = data => {
        if(data) {
            toast.success("The user is added successfully.");
            onAdd(data)
        }
        reset()
    }

    return <>
        <h2>Add user</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input 
                    type="text" 
                    placeholder="Add name" 
                    {...register("name")}
                />
                 {errors.name && <p style={{color:"red"}}>{errors.name.message} </p>}
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Add surname" 
                    {...register("surname")}
                />
                {errors.surname && <p style={{color:"red"}}>{errors.surname.message} </p>}
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="Add age" 
                    {...register("age")}
                />
                {errors.age && <p style={{color:"red"}}>{errors.age.message} </p>}
            </div>
            <div>
                <input 
                    type="email" 
                    placeholder="Add login email" 
                    {...register("email")}
                />
                {errors.email && <p style={{color:"red"}}>{errors.email.message} </p>}
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Add password" 
                    {...register("password")}
                />
                {errors.password && <p style={{color:"red"}}>{errors.password.message} </p>}
            </div>
            <button>Save</button>
            <ToastContainer
                transition={Slide}
            />
        </form>
    </>
}

AddUser.prototype = {
    onAdd: PropTypes.func.isRequired
}