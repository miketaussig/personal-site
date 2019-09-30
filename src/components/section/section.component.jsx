import React, { Component } from 'react'

import Card from '../card/card.component'

import './section.styles.scss'

export default class Section extends Component {
  render() {
    return (
      <div className="section">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
