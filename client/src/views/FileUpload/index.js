import React, { Component } from 'react'
import Application from '../../components/Application'
import Mutation from '../../components/Mutation'

export default class index extends Component {
  render() {
    return (
      <div>
        <Application title={'titulo'}>
          <Mutation />

        </Application>
      </div>
    )
  }
}
