import React, { Component } from 'react';
import Joi from 'joi-browser';

import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Register extends Component {
    
        constructor() {
            super();
            this.state={
                // email: '',
                // password:'', 
                // formErrors:{}
                data : {email:'', password:'', uname:''},
                // errors:{email:'email is required', password:'password is required'}
                errors:{ }
    
            }
          //  this.initialState = this.state;
        }
        
        schema={
          email:Joi.string().email().required(),
          password:Joi.string().required(),
          uname:Joi.string().required(),
        }
    
        handleChange = ({target:input}) => {
          //console.log(event)
    
          const data={...this.state.data}
          const errors = {...this.state.errors}
    
          // data['email']=event.target.value
          // data[event.target.name]=event.target.value
          
          data[input.name]=input.value
          const errorMessage = this.validateField(input)
          
          if(errorMessage)
              errors[input.name]=errorMessage
          else
              delete errors[input.name]
    
          this.setState({data,errors})
        }
    
        validateField=(input) => {
         const {email,password,uname}=this.state.data;
          
         if(input.name==='email')
            if(input.value==="") // input.value or email.value // input.value is more appropriate
                return 'Email is required'
          
          if(input.name==='password')
            if(input.value==="")
                return 'Password is required'

         if(input.name==='uname')
            if(input.value==="")
                return 'User Name is required'

    
        const data = {[input.name] : input.value}
    
        }
    
        validate =()=> {
    
          let errors ={}
    
          const{data} =this.state;
    
          if(data.email==='')
    
          errors.email ='Email is required'
    
          if(data.password==='')
    
          errors.password ='Password is required'

          if(data.uname==='')
    
          errors.uname ='User Name is required'
    
          return Object.keys(errors).length === 0 ? null :errors;
    
          const results=Joi.validate(data,this.schema, {abortEarly:false})
    
          // for(let item of results.error.details) {
          //   errors[item.path[0]]=item.message
          // }
    
         // return errors;
    
             }
    
    
        hangleSubmit = (event) =>{
          // console.log('form submitted')
          //console.log(event)
          event.preventDefault() // this prevents submit button's default action
          const errors = this.validate();
          this.setState({errors:errors || {} })
          if(errors) return;
          const{data} =this.state;
            console.log ('form submitted')
           // const { email, password } = this.state;
            localStorage.setItem('email', ( data.email));
            localStorage.setItem('password',( data.password));
            localStorage.setItem('uname',( data.uname));
            
            // localStorage.setItem('user', rememberMe ? user : '');
            window.location='/login';
    
        }
        
        
    
         render() {
     
           const{data,errors} = this.state;
    
             return (

              <>
              <div className='text-center mainst'>
                 <Grid align="center">
                   <Paper className="paperStyle">
                     <Grid align='center'>
                       <Avatar className='avatarStyle'><LockOutlinedIcon /></Avatar>
                       <h2>Sign Up</h2>
                     </Grid>
                     <form onSubmit={this.hangleSubmit}>

                       
                     <TextField label='User Name' name="uname" id="uname"
                         type="text" placeholder='Enter Name' required
                         value={data.value}
                         onChange={this.handleChange} />
                       {errors.uname && <div className="alert alert-danger">
                         {errors.uname}
                       </div>}

                       <TextField label='Email id' name="email" id="email"
                         type="email" placeholder='Enter Email' required
                         value={data.value}
                         onChange={this.handleChange} />
                       {errors.email && <div className="alert alert-danger">
                         {errors.email}
                       </div>}

                       <TextField label='Password' name="password" id="password"
                         type="password" placeholder='Enter Password' required
                         value={data.value}
                         onChange={this.handleChange} />
                       {errors.password && <div className="alert alert-danger">
                         {errors.password}
                       </div>}
                       <div className='mainst'>
                         <button type="submit" className='btn btn-success'>Register</button>
                       </div>
                     </form>
                   </Paper>
                 </Grid>
               </div>
               
               {/* <div>
                   <h1>Registration Form</h1>
                   <form onSubmit={this.hangleSubmit}> */}

                     {/* <div className='mb-3'>
      <label className='form-label'>User Name</label>
      <input type="text"
      className="form-control"
       id="uname"
       placeholder="Name Please"
      value={data.value}
       onChange={this.handleChange}
       name="uname"/>
      {errors.uname &&  <div className="alert alert-danger">
         {errors.uname}
       </div> }
      </div> */}


                     {/* <div className='mb-3'>
                       <label className='form-label'>Email</label>
                       <input type="email"
                         className="form-control"
                         id="email"
                         placeholder="Enter email"
                         value={data.value}
                         onChange={this.handleChange}
                         name="email" />
                       {errors.email && <div className="alert alert-danger">
                         {errors.email}
                       </div>}
                     </div>


                     <div className='mb-3'>
                       <label className='form-label'>Password</label>
                       <input type="password"
                         className="form-control"
                         id="password"
                         placeholder="Enter email"
                         value={data.value}
                         onChange={this.handleChange}
                         name="password" />
                       {errors.password && <div className="alert alert-danger">
                         {errors.password}
                       </div>}
                     </div>

                     <button type="submit" className='btn btn-success'>Register</button>

                   </form>
                 </div> */}
                 </>
                
            );
        }  
    }
    


export default Register;