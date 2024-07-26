import { Route, Routes } from "react-router-dom"
import CreatePostPage from "../pages/createpostpage"
import LoginPage from "../pages/loginpage"
import Mainpage from "../pages/mainpage"
import OpenBlog from "../components/OpenBlog"
import SignupPage from "../pages/signuppage"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import { IRoutes } from "../interfaces/IRoutes"

const Index = ()=> {
 const routes:IRoutes[] =[{
    component:<CreatePostPage/>,
    path:"/create",
    restricted:true,
  },
  {
    component:<LoginPage/>,
    path:"/login",
    restricted:false,
  },
  {
    component:<SignupPage/>,
    path:"/signup",
    restricted:false,
  },
  {
    component:<Mainpage/>,
    path:"/",
    restricted:false,
  },
  {
    component:<OpenBlog/>,
    path:"/openblog/:id",
    restricted:true,
  },
]
  return (
<Routes>  
  {routes.map((item:IRoutes, index:number)=>{
    const {component, path, restricted} = item;
    return <Route key={index} path={path} element={restricted? <PrivateRoutes component={component}/> : <PublicRoutes component={component}/>}/>
  })}
</Routes>
  )
}

export default Index