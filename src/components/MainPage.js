import React from 'react'
import '../styles/MainPage.scss'
import Header from './Layout/Header'
import LoginForm from './LoginForm'


const MainPage = () => {
  return (
    <div className='mainPhoto'>
        <Header/>
        <LoginForm/>
    </div>
  )
}

export default MainPage