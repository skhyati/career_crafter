
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/home/Home'
import Jobseeker from './components/users/Jobseeker'
import Recruiter from './components/users/Recruiter'
import Jobs from './components/home/Jobs'
import LoginRecruiter from './components/auth/LoginRecruiter'
import SignupRecruiter from './components/auth/SignupRecruiter'
import Browse from './components/browse/Browse'
import Profile from './components/profile/Profile'
import RecruiterCompanies from './components/recruiter/RecruiterCompanies'
import Application from './components/application/Application'
import Feedback from './components/feedback/Feedback'

function App() {
 

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/loginrecruiter',
      element:<LoginRecruiter/>
    },
    {
      path:'/signuprecruiter',
      element:<SignupRecruiter/>
    },
    {
      path:'/recruiter',
      element:<Recruiter/>
    },
    {
      path:'/jobseeker',
      element:<Jobseeker/>
    },
    {
      path:'/jobs',
      element:<Jobs/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },
    {
      path:'/recruiter/companies',
      element:<RecruiterCompanies/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/recruiter/application',
      element:<Application/>
    },
    {
      path:'/feedback',
      element:<Feedback/>
    }
  ])
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
