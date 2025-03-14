import { createBrowserRouter } from "react-router-dom";
import LoginComp from '../layout/LoginComp'
import PageNotFoundComp from '../layout/PageNotFoundComp'
import ClassComp from "../components/ClassComp";
import MainDashboardComp from "../layout/MainDashboardComp"
import { Children } from "react";
import ParentComp from "../components/ParentComp";
import MyImagesComp from "../components/MyImagesComp";
import MyEventComp from "../components/MyEventComp";
import FormValComp from "../components/FormValComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";

const router = createBrowserRouter([
    

    //default routing
    {path:"",element:<LoginComp></LoginComp>},
    //naming routing
    {path:"login",element:<LoginComp></LoginComp>},
    
    //Child Routing
    {path:"maindashboard",element:<MainDashboardComp></MainDashboardComp>,children:[
        {path:"",element:<MyImagesComp/>},
        {path:"parent",element:<ParentComp/>},
        {path:"images",element:<MyImagesComp/>},
        {path:"event",element:<MyEventComp/>},
        {path:"form",element:<FormValComp/>},
        {path:"reacthooks",element:<ReactHooksComp/>,children:[
            {path:"usestate",element:<UseStateHookComp></UseStateHookComp>},
            {path:"useeffect",element:<UseEffectHookComp></UseEffectHookComp>},

        ]},
        {path:"useeffect",element:<UseEffectHookComp/>},
         //parameterized routing
        {path:"classcomp/:id",element:<ClassComp></ClassComp>},

    ]},

    //Wildcard Routing
    {path:"*",element:<PageNotFoundComp></PageNotFoundComp>}
])

export default router