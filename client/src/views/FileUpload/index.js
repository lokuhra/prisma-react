import React, { Component } from 'react'
import Application from '../../components/Application'
import FileUpload from '../../components/FileUpload'

export default class index extends Component {
  render() {
    return (
      <div>
        <Application title={'titulo'}>
          <FileUpload />

        </Application>
      </div>
    )
  }
}
