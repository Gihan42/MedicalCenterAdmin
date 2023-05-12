import React, { Component } from 'react'
import Title from '../../components/Title/Title'
import Header from '../../components/Header/Header'
import Doctor from '../Doctor/Doctor'

export default class Home extends Component {
  render() {
    return (
        <>
        <Header/>
         <div className='h-screen p-28' >
            <section className=''>
            <Title/>
            <Doctor/>
            </section>
           
      </div>
        </>
     
    )
  }
}
