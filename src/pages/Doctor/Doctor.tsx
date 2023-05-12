import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';import { relative } from 'path';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

export default class Doctor extends Component {
  render() {
    return (
      <div>
         <section>
            <div className="cursor-pointer w-full pt-2 border-2 border-white pb-2 pl-6 bg-slate-900 text-white rounded flex justify-between items-center ">
             <h1 className='text-2xl '>Doctor's Details</h1>
            </div>
            <section className='grid grid-cols-2 gap-4 mt-10 pl-10 pr-10 w-auto h-auto'>
            <div className="bg-white border-2 border-gray-700 p-4 rounded-3xl shadow-2xl shadow-black">
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
            </div>
            <div className="bg-transparent ">
            <div className='h-auto mt-3 '>
                <table className="table">
                      <thead className="table-dark">
                      <tr >
                        <th scope="col">DoctorId</th>
                        <th scope="col">DoctorName</th>
                        <th scope='col'>Position</th>
                        <th scope='col'>Time</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Charges</th>
                        <th scope="col">WardsNo</th>
                        <th scope="col"><DeleteIcon/></th>
                      </tr>
                     </thead>
                      <tbody>
                      <tr>
                       <td>A001</td>
                       <td>Dr P Darshana</td>
                       <td>Doctor</td>
                       <td>06:00pm</td>
                       <td>078-909089</td>
                       <td>3500</td>
                       <td>06</td>
                       <td><CloseIcon/></td>
                     </tr>

                     </tbody>
                    </table>
                </div> 
            </div>
            </section>
            </section>
      </div>
    )
  }
}
