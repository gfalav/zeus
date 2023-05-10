import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './comps/layout/Home'
import SignIn from './comps/auth/SignIn'
import SignUp from './comps/auth/SignUp'
import Reset from './comps/auth/Reset'
import Layout from './comps/layout/Layout'
import ErrorPage from './comps/layout/ErrorPage'
import { RecoilRoot } from 'recoil'
import { createTheme, ThemeProvider } from '@mui/material'
import Theme from './comps/layout/Theme'
import ProjectList from './comps/app/project/ProjectList'
import {ProjectNew} from './comps/app/project/ProjectNew'
import ProjectShow from './comps/app/project/ProjectShow'

const router = createBrowserRouter([
  { 
    path: '/', element: <Layout />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'auth/signin', element: <SignIn />},
      { path: 'auth/signup', element: <SignUp />},
      { path: 'auth/reset', element: <Reset />},
      { path: 'project', element: <ProjectNew />},
      { path: 'project/:projectId', element: <ProjectShow />},
      { path: 'projectlist', element: <ProjectList />}
    ]
  },
])

const theme = createTheme(Theme())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </ThemeProvider>
)