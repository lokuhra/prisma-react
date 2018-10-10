import React, { Fragment } from 'react'
import { Router } from 'buttermilk'

import routes from '../../utils/routes'
import Home from '../../views/Home'
import TablaFaltantes from '../../views/TablaFaltantes'
import FileUpload from '../../views/FileUpload'



const Routes = () => (
  <Router
    routes={[
      {
        path:"/",
        render: () => Home,
      },
        {
            path: "faltantes",
            render: () => TablaFaltantes,
        },
      {
        path: "file_upload",
        render: () => FileUpload,
      },
      {
        path: "*",
        render: () => <div>Not Found</div>,
      },
    ]}
  />
)

export default Routes
