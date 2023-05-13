import React, { Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

export default class Channelling extends Component {
  render() {
    return (
      <div className='mt-10'>

        <section>
            <div className="cursor-pointer w-full pt-2 border-2 border-white pb-2 pl-6 bg-cyan-900 text-white rounded flex justify-between items-center ">
             <h1 className='text-2xl '>Channel List</h1>
            </div>
            <div className='p-4'>
            <div className='h-auto mt-3 '>
                <table className="table">
                      <thead className="table-dark">
                      <tr >
                        <th scope="col">AppoinmentNo</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Patient Age</th>
                        <th scope='col'>Patient Address</th>
                        <th scope='col'>Doctor Name</th>
                        <th scope='col'>Doctor Charge</th>
                        <th scope='col'>Ward No</th>
                        <th scope='col'>Bill</th>
                        <th scope='col'>Payment Date</th>
                        <th scope='col'>Time</th>
                        <th scope="col"><DeleteIcon/></th>
                      </tr>
                     </thead>
                      <tbody>
                      <tr>
                       <td>A001</td>
                       <td>Dr P Darshana</td>
                       <td>Doctor</td>
                       <td>A001</td>
                       <td>Dr P Darshana</td>
                       <td>Doctor</td>
                       <td>A001</td>
                       <td>Dr P Darshana</td>
                       <td>Doctor</td>
                       <td>A001</td>
                       
                       <td><CloseIcon/></td>
                     </tr>

                     </tbody>
                    </table>
                </div> 
            </div>
      </section>
      </div>
    )
  }
}
