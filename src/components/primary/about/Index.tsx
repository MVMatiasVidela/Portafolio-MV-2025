import React from 'react'
import Profile from './Profile/Profile'
import Contact from '../home/contact/Contact'
import Experience from './Experience/Experience'
import Team from './Team/Team'
import Stack from './Stack/Stack'


const Index = () => {
  return (
    <div>
      <Profile></Profile>
      <Experience></Experience>
      <Stack></Stack>
      <Team></Team>
      {/* <Contact></Contact> */}
    </div>
  )
}

export default Index
