import React, { Component } from 'react'
import Application from '../../components/Template'
import TableFaltantes from '../../components/TableFaltantes'

export default class index extends Component {
  render() {
    return (
      <div>
        <Application title={'titulo'}>
          <TableFaltantes />

        </Application>
      </div>
    )
  }
}
