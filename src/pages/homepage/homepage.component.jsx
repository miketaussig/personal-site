import React from 'react'

import Main from '../../components/main/main.component'

import Header from '../../components/header/header.component'

import Section from '../../components/section/section.component'

import './homepage.styles.scss'

export default function HomePage() {
  return (
    <div className='homepage'>
      <Header />
      <Main />
      <Section name="skills" />
      <Section name="experience" />
      <Section name="projects" /> 
    </div>
  )
}
