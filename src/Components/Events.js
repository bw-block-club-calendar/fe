import * as Yup from "yup";

import { Field, Form, withFormik } from "formik";
import React, { useEffect, useState } from "react";

import axios from "axios";

const Register = ({ values, errors, touched, status })=>{
    
      
const [users, setUsers] = useState([]);
  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

 

return(
    <div className="user-form">
    
    <br></br>
    <Form>
    <label className="checkbox-container">Terms Of Service
    <Field type="checkbox" name="terms" checked={values.terms}/>
    {touched.terms && errors.terms && (<p className="errors">{errors.terms}</p>)}
    <span className="checkmark"/>
    </label>
    <Field type="text" name="email" placeholder="What is your Email?"/><br></br>
    {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
    <br></br>
    <Field type="text" name="streetAddress" placeholder="What is your street address?"/><br></br>
    {touched.streetAddress && errors.streetAddress && (<p className="errors">{errors.streetAddress}</p>)}
    <br></br>
    <Field type="text" name="city" placeholder="What is your city?"/><br></br>
    {touched.city && errors.city && (<p className="errors">{errors.city}</p>)}
    <br></br>
    <Field type="text" name="zipcode" placeholder="What is your Zipcode?"/><br></br>
    {touched.zipcode && errors.zipcode && (<p className="errors">{errors.zipcode}</p>)}
    <br></br>
    <Field type="text" name="businessName" placeholder="What is your Business Name?"/><br></br>
    {touched.businessName && errors.businessName && (<p className="errors">{errors.businessName}</p>)}
    <br></br>
    <label className="checkbox-container">Terms Of Service
    <Field type="checkbox" name="terms" checked={values.terms}/>
    {touched.terms && errors.terms && (<p className="errors">{errors.terms}</p>)}
    <span className="checkmark"/>
    </label>
    <button type="submit">Submit!</button>

    </Form>
    {users.map( (user, index) => (
        <ul key={index}>
            
            <li>{user.email}</li>
            <li>{user.address}</li>
            <li>{user.city}</li>
            <li>{user.zipcode}</li>
            <li>{user.businessName}</li>
            
        </ul>
    ))}
    

    </div>
);
};



const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
        };

    },
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Your name is too short ").required("Please enter a name!!"),
        email: Yup.string().email("Must be real Email"),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password is required!!"),
        terms: Yup.boolean().test('terms', "Please agree to terms of service", value => value === true)        
      }),
      handleSubmit(values, { setStatus, resetForm }) {
        // values is our object with all of our data
        console.log(values);
        axios
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            setStatus(res.data);
            resetForm();
            console.log(res);
          })
          .catch(err => console.log(err.response));
      }
      
})(Register);

export default FormikUserForm;

console.log("This is the HOC", FormikUserForm)