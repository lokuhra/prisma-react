import React, { Component } from 'react'
import Application from '../../components/Template'
import Query from "../../components/Query"

import { Typography, Elevation, Grid, GridCell, RMWCProvider } from 'rmwc'

export default class index extends Component {
  render() {
    return (
      <div>
        <Application title={'titulo'}>
            <RMWCProvider>

          <Elevation z={24}>
              <Query />

          </Elevation>
            </RMWCProvider>
        </Application>
      </div>
    )
  }
}
