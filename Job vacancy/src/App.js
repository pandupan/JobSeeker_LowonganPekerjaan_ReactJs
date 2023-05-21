import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";
import LayoutLanding from "./widget/LayoutLanding";
import LayoutDashboard from './widget/LayoutDashboard'
import ListData from "./pages/managedata/listdata";
import ChangePass from "./pages/auth/changepass";
import Login from "./pages/auth/login";
import Cookies from "js-cookie";
import CreateData from "./pages/managedata/createdata";
import Register from "./pages/auth/register";
import DetailJob from "./pages/job/detailjob";
import { GlobalProvider } from "./context/GlobalContext";
import ErrorPage from "./pages/404/404";
import NavigationBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const App = () => {
  const LoginRoute = (props) => {
    if(Cookies.get('token')===undefined){
      return props.children
    }else if (Cookies.get('token')!== undefined){
      return <Navigate to={'/'} />
    }
  }
  const DashboardRoute = (props) => {
    if(Cookies.get('token')===undefined){
      return <Navigate to={'/login'} />
    }else if (Cookies.get('token')!== undefined){
      return props.children
    }
  }
  return (
    <>
    <BrowserRouter>
    <GlobalProvider>

      <Routes>

        <Route path='/login' element=
        {
          <LoginRoute>
            <NavigationBar/>
            <Login />
            <Footer></Footer>
          </LoginRoute>
        } 
        />

        <Route path='/register' element=
        {
          <LoginRoute>
            <LayoutLanding>
            <Register />
            </LayoutLanding>
          </LoginRoute>
        } 
        />

        <Route path='/' element=
        {
          <LayoutLanding>
            <Home />
          </LayoutLanding>
        } 
        />

        <Route path='/detail/:idData' element=
        {
          <LayoutLanding>
            <DetailJob />
          </LayoutLanding>
        } 
        />

        <Route path='/dashboard' element=
        {
          <DashboardRoute>
          <LayoutDashboard>
            <Dashboard />
          </LayoutDashboard>
          </DashboardRoute>
        }
        />

        <Route path='/dashboard/listdata' element=
        {<DashboardRoute>
          <LayoutDashboard>
            <ListData />
          </LayoutDashboard>
        </DashboardRoute>
        }
        />

        <Route path='/dashboard/listdata/createdata' element=
        {<DashboardRoute>
          <LayoutDashboard>
            <CreateData />
          </LayoutDashboard>
        </DashboardRoute>
        }
        />

        <Route path='/createdata/:ID_JOBS_APPS' element=
        {<DashboardRoute>
          <LayoutDashboard>
            <CreateData />
          </LayoutDashboard>
        </DashboardRoute>
        }
        />

        <Route path='/dashboard/changepass' element=
        {
          <DashboardRoute>
          <LayoutDashboard>
            <ChangePass />
          </LayoutDashboard>
          </DashboardRoute>
        }
        />
        <Route path="*" element={
        <ErrorPage/>
        } />
      </Routes>
    </GlobalProvider>

    </BrowserRouter>
    </>
  )
}

export default App;