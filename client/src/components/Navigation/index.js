import React, { Fragment } from 'react'
import { Router } from 'buttermilk'

import routes from '../../utils/routes'
import Home from '../../views/Home'
import Page2 from '../../views/Screen2'
import FileUpload from '../../views/FileUpload'



const Routes = () => (
  <Router
    routes={[
      {
        path:"/",
        render: () => Home,
      },
        {
            path: "pagina_2",
            render: () => Page2,
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
