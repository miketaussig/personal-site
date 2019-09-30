import React, { Component } from 'react'

import Main from '../main/main.component'

import Header from '../header/header.component'

import Section from '../section/section.component'

import Footer from '../footer/footer.component'

import './directory.styles.scss'

export default class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        <Header />
        <Main />
        <Section name="skills" />
        <Section name="experience" />
        <Section name="projects" /> 
        <Footer />
      </div>
    )
  }
}
