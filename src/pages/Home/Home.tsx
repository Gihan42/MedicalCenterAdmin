import React, { Component } from 'react'
import Title from '../../components/Title/Title'
import Header from '../../components/Header/Header'

export default class Home extends Component {
  render() {
    return (
        <>
        <Header/>
         <div className='h-screen p-28' >
            <section className=''>
            <Title/>
            </section>
            <section>
            <div className="cursor-pointer w-full pt-2  pb-2 pl-6 bg-slate-900 text-white rounded flex justify-between items-center border border-gray-400">
             <h1 className='text-2xl '>Doctor's Details</h1>
            </div>
            </section>
      </div>
        </>
     
    )
  }
}
