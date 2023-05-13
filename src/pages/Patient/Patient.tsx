import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';import { relative } from 'path';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import axios from '../../axios';


type PatientDetails = {
  email:string;
  userName:string;
  password:string;
};
type PatientProps = {};
type PatientState = {
  patientList: PatientDetails[];
  email:string;
  userName:string;
  password:string;
};
export default class Patient extends Component  <PatientProps, PatientState>{
  constructor(props: PatientProps) {
    super(props);
    this.state = {
      patientList: [],
      email:"",
      userName:"",
      password:"",
      
    };
  };
  componentDidMount(): void {
    this.getAllPatient();
  };
  getAllPatient =()=>{
    axios.get ("http://localhost:5000/api/v1/patient").then((res)=>{
       console.log(res.data.responseData);
       this.setState((prevState)=>({
         ...prevState,
         patientList:res.data.responseData,
       }))
    })
 };
  render() {
    return (
      <div className='mt-10 '>

<section>
            <div className="cursor-pointer w-full pt-2 border-2 border-white pb-2 pl-6 bg-sky-900 text-white rounded flex justify-between items-center ">
             <h1 className='text-2xl '>Patient's Details</h1>
            </div>
            <section className='grid grid-cols-2 gap-4 mt-10 pl-10 pr-10 w-auto h-auto'>
            {/* <div className="bg-white border-2 border-gray-700 p-4 rounded-3xl shadow-2xl shadow-black">
               <div className='flex space-x-5'>
               <form action="" className='text-2xl '>
                <div className='flex justify-center space-x-10 mb-5'>
                <TextField
                      label="Doctor Id"
                      type="text"
                      variant="outlined"
                      name="DId"
                      placeholder="Enter Doctor Id"
                      required
                      
                    />
            <button type="button" className="btn btn-success pl-4 pr-4">Search Doctor<PersonSearchIcon/></button>
            
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Doctor Id
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="DId"
                  label="Doctor Id"
                  name="DId"
                  autoFocus
                  type="text"
                  variant="standard"

                  // value={this.state.DId}
                  // onChange={this.handleInput}
                />
                  </div>
                  <div className='text-xl'>Doctor Name
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Doctor Name"
                  name="DName"
                  autoFocus
                  variant="standard"

                  // value={this.state.DName}
                  // onChange={this.handleInput}
                />
                  </div>
                             
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Doctor Position
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="position"
                  label="position"
                  type="text"
                  id="position"
                  variant="standard"

                  // value={this.state.position}
                  // onChange={this.handleInput}
                />
                  </div>
                  <div className='text-xl'>Time
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="time"
                  label="Time"
                  type="text"
                  id="time"
                  variant="standard"

                  // value={this.state.time}
                  // onChange={this.handleInput}
                
                />
                  </div>
                             
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Doctor Charges
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="DCharge"
                  label="DCharge"
                  type="number"
                  id="DCharge"
                  // value={this.state.DCharge}
                  // onChange={this.handleInput}
                  variant="standard"
                />
                  </div>
                  <div className='text-xl'>WArd NO
                  <TextField
                   margin="normal"
                   required
                   fullWidth
                   name="wardNo"
                   label="WardNo"
                   type="number"
                   id="WardNo"
                  //  value={this.state.wardNo}
                  //  onChange={this.handleInput}"
                  variant="standard"

                  // value={this.state.time}
                  // onChange={this.handleInput}
                
                />
                  </div>
                             
                </div>
                <div className='flex justify-start  m-1'>
                <div className='text-xl space-x-3 '>Doctor Contact
                <TextField
                  fullWidth
                  margin="normal"
                  required
                  name="contact"
                  label="contact"
                  type="text"
                  id="contact"
                  // value={this.state.contact}
                  // onChange={this.handleInput}
                  variant="standard"
                />
                  <button type="button" className="btn btn-primary">Save</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                  <button type="button" className="btn btn-warning">Update</button>
                  </div>  
                  
                </div>
              </form>
               </div>
            </div> */}
             <div className='h-auto mt-3 '>
                <table className="table">
                      <thead className="table-dark">
                      <tr >
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope='col'>Password</th>
                        <th scope="col"><DeleteIcon/></th>
                      </tr>
                     </thead>
                      <tbody>
                      {this.state.patientList.map((patient) => (
                        <tr>
                       <td>{patient.email}</td>
                       <td>{patient.userName}</td>
                       <td>. . . . . . .</td>
                       <td><CloseIcon/></td>
                        </tr>
                     ))};

                     </tbody>
                    </table>
                </div> 
            <div className="bg-transparent ">
            <div className="bg-slate-200 border-2 border-gray-700 p-4 rounded-3xl shadow-2xl shadow-black">
               <div className='flex space-x-5'>
               <form action="" className='text-2xl '>
                <div className='flex justify-center space-x-10 mb-5'>
                <TextField
                      type="email"
                      variant="outlined"
                      id="email"
                      label="Email Address"
                      name="email"
                      placeholder="Enter Doctor Id"
                      required
                      
                      
                    />
            <button type="button" className="btn btn-success pl-4 pr-4">Search Patient<PersonSearchIcon/></button>
            
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Email Address
                <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          type="text"
                          variant="standard"

                        //   value={this.state.email}
                        //   onChange={this.handleInput}
                        />
                  </div>
                  <div className='text-xl'>User Name
                  <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="text"
                          label="User Name"
                          name="userName"
                          autoFocus
                          variant="standard"

                        //   value={this.state.userName}
                        //   onChange={this.handleInput}
                        />
                  </div>           
                </div>
                <button type="button" className="btn btn-danger">Delete Patient<CloseIcon/></button>
              </form>
               </div>
            </div>
           
            </div>
            </section>
            </section>
      </div>
    )
  }
}
