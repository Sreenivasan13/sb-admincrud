import React, {useEffect} from 'react'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

const Useredit = () => {
    let params = useParams()
    const formik = useFormik({
        initialValues : {
            name: "",
            postion: "",
            office: "",
            age: null,
            startDate: "",
            salary: ""

        },
        onSubmit: async values => {
            try {
                await fetch(`https://61c1954e9dbcca0017c81fbb.mockapi.io/api/users/${params.id}`, {
                       method: "DELETE",
                       body: JSON.stringify(values),
                       headers: {
                           "content-type": "application/json"
                       }
                })
                alert("Data Deleted")
            } catch (error) {
                 console.log(error)
            }
            // alert(JSON.stringify(values, null, 2));
        }
    })
    
        useEffect(async() => {
            try {
               let userdata = await fetch(`https://61c1954e9dbcca0017c81fbb.mockapi.io/api/users/${params.id}`);
               let user = await userdata.json()
               formik.setValues(user)
            } catch (err) {
                console.log(err);
            }
            
        }, [])
    
    return (
        <>
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User Create</h1>
           </div> 
           <div className="container">
           <form onSubmit={formik.handleSubmit}>
               <div className="row">
                   <div className="col-lg-6">
                       <label>Name</label>
                       <input type="text" className="form-control"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}/>
                   </div>
                   <div className="col-lg-6">
                       <label>Position</label>
                       <input type="text" className="form-control" 
                          name="position"
                          onChange={formik.handleChange}
                          value={formik.values.position}/>
                   </div>
                   <div className="col-lg-4">
                       <label>Office</label>
                       <input type="text" className="form-control" 
                           name="office"
                           onChange={formik.handleChange}
                           value={formik.values.office}/>
                   </div>
                   <div className="col-lg-4">
                       <label>Age</label>
                       <input type="number" className="form-control" 
                            name="age"
                            onChange={formik.handleChange}
                            value={formik.values.age}/>
                   </div>
                   <div className="col-lg-4">
                       <label>Start Date</label>
                       <input type="date" className="form-control" 
                             name="startDate"
                             onChange={formik.handleChange}
                             value={formik.values.startDate}/>
                   </div>
                   <div className="col-lg-12">
                       <label>Salary</label>
                       <input type="text" className="form-control" 
                             name="salary"
                             onChange={formik.handleChange}
                             value={formik.values.salary}/>
                   </div>
                   <div className="col-lg-3 mt-3">
                       <input type="submit" className="btn btn-danger" value="Delete"/>
                   </div>
               </div>
            </form>
               
           </div>
        </>
    )
}

export default Useredit
