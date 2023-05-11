import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Form = ({ formFields }) => {
    const [formData, setFormData] = useState({})
    const [valid,setValid] = useState(false)
    const [errorMsg,setErrorMsg] = useState()
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData , [name]: value}));
    };

    const validation = () =>{
        let isValid = true
        let errormsg = []
       formFields.forEach((field)=>{
        if(formData[field.name] === undefined || formData[field.name] === ""){
            isValid = false
            errormsg.push(<li>[ {field.label} ] is required</li>)
            
            //Add each error into an array and print below 
            //make use of useEffect
           
        }
        setValid(isValid)
        setErrorMsg(errormsg)
       })
    }

    const formSubmit = (event) =>{
       
        validation()
        console.log(formData)
        event.preventDefault()
    }

   

    return (
        <div className="row">
            <div className="col-12">
               <div className={valid?'collapse':''}>
                <ul className="text-danger">
                 {
                    errorMsg
                 }
                </ul>
               </div>
                <form onSubmit={formSubmit} autoComplete="off">
                    {
                        formFields.map((field) =>
                            <div className="mb-3">
                                <label htmlFor={field.id} className="form-label">{field.label}</label>
                                {
                                    // field.type === 'input'?
                                    // (<input type={field.type} classname="form-control" id={field.id}/>):
                                    field.type === 'select'?
                                    (<select className="form-select" name={field.name} onChange={handleInputChange}>
                                        <option value="">Please Select</option>
                                        {field.options.map((option)=>
                                            <option key={option.value} value={option.value} >{option.label}</option>
                                        )}
                                    </select>):
                                    (<input type={field.type} name={field.name} className="form-control" id={field.id}  onChange={handleInputChange}/>)

                                }
                            </div>

                        )
                    }
                    <button className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form