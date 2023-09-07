import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {

  const [todo, setTodo] = useState({
    title:"" ,
    description:""
  })

  const {title , description} = todo;
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getById();
  }, [])
  
  const getById=async()=>{
   const value =  await axios.get(`http://localhost:8080/todo/${id}`)
   setTodo(value.data);
  }


  const onClieckEvent=(e)=>{
    setTodo({...todo , [e.target.name] : e.target.value});
  }

  const formSubmit= async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/todo/${id}`,todo);
    navigate("/");
  }

  const cancelButton=()=>{
    navigate("/");
  }

  const resetButton=()=>{
    setTodo({title:" " , description:" "})
  }

  return (
    <div className='container my-5'>
      <form onSubmit={(e)=>{formSubmit(e)}}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name="title" value={title} onChange={(e)=>onClieckEvent(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="text" className="form-control" id="exampleInputPassword1" name='description' onChange={(e)=>{onClieckEvent(e)}} value={description}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" onClick={(e)=>{resetButton(e)}} className="btn btn-secondary mx-3">Reset</button>
        <button onClick={(e)=>{cancelButton(e)}} className="btn btn-danger">Cancel</button>
      </form>
    </div>
  )
}

export default EditTodo