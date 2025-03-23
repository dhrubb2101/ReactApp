import React, { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";
import LoginComp from '../layout/LoginComp'
import PageNotFoundComp from '../layout/PageNotFoundComp'
import ClassComp from "../components/ClassComp";
import MainDashboardComp from "../layout/MainDashboardComp"
// import { Children } from "react";
import ParentComp from "../components/ParentComp";
import MyImagesComp from "../components/MyImagesComp";
import MyEventComp from "../components/MyEventComp";
import FormValComp from "../components/FormValComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
// import ProductAddComp from "../CRUD/ProductAddComp";
// import ProductDashComp from "../CRUD/ProductDashComp";
// import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouteComp from "./ProtectedRouteComp";
import UseRefHookComp from "../Hooks/UseRefHookComp";
import UseContextHookComp from "../Hooks/UseContextHookComp";
//Lazy Loading done for ProductDash Component,ProductEdit Componennt,ProductAdd Component
const ProductDashCompLazyLoad = lazy(() => import("../CRUD/ProductDashComp"));
const ProductEditCompLazyLoad = lazy(() => import("../CRUD/ProductEditComp"));
const ProductAddCompLazyLoad = lazy(() => import("../CRUD/ProductAddComp"));



const router = createBrowserRouter([
    

    //default routing
    {path:"",element:<LoginComp></LoginComp>},
    //naming routing
    {path:"login",element:<LoginComp></LoginComp>},
    
    //Child Routing
    // {path:"maindashboard",element:<MainDashboardComp></MainDashboardComp>,children:[
    {path:"maindashboard",element:<ProtectedRouteComp  Component={MainDashboardComp}/>,children:[
        {path:"",element:<MyImagesComp/>},
        {path:"parent",element:<ParentComp/>},
        {path:"images",element:<MyImagesComp/>},
        {path:"event",element:<MyEventComp/>},
        {path:"form",element:<FormValComp/>},
        // {path:"productadd",element:<ProductAddComp/>},
        // {path:"productedit/:id",element:<ProductEditComp/>},
        // {path:"productdash",element:<ProductDashComp/>},
        //Lazy Loading done for ProductDash.ProductEdit,ProductAdd Component
        {path:"productdash",element:
            <Suspense fallback={<div>Loading...</div>}>
                        <ProductDashCompLazyLoad />
                    </Suspense>
        },
        {path:"productadd",element:
            <Suspense fallback={<div>Loading...</div>}>
                        <ProductAddCompLazyLoad />
                    </Suspense>
        },
        {path:"productedit/:id",element:
            <Suspense fallback={<div>Loading...</div>}>
                        <ProductEditCompLazyLoad />
                    </Suspense>
        },
        {path:"reacthooks",element:<ReactHooksComp/>,children:[
            {path:"usestate",element:<UseStateHookComp></UseStateHookComp>},
            {path:"useeffect",element:<UseEffectHookComp></UseEffectHookComp>},
            {path:"useref",element:<UseRefHookComp></UseRefHookComp>},
            {path:"usecontext",element:<UseContextHookComp></UseContextHookComp>},

        ]},
        {path:"useeffect",element:<UseEffectHookComp/>},
         //parameterized routing
         {path:"classcomp/:id",element:<ClassComp></ClassComp>},

    ]},

    //Wildcard Routing
    {path:"*",element:<PageNotFoundComp></PageNotFoundComp>}
])

export default router

// import React, { lazy, Suspense } from "react";
// import { createBrowserRouter } from "react-router-dom";

// import LoginComp from "../layout/LoginComp";
// import PageNotFoundComp from "../layout/PageNotFoundComp";
// import ClassComp from "../components/ClassComp";
// import MainDashboardComp from "../layout/MainDashboardComp";
// import ParentComp from "../components/ParentComp";
// import MyImagesComp from "../components/MyImagesComp";
// import MyEventComp from "../components/MyEventComp";
// import FormValComp from "../components/FormValComp";
// import ReactHooksComp from "../Hooks/ReactHooksComp";
// import UseEffectHookComp from "../Hooks/UseEffectHookComp";
// import UseStateHookComp from "../Hooks/UseStateHookComp";
// import ProductAddComp from "../CRUD/ProductAddComp";
// import ProductEditComp from "../CRUD/ProductEditComp";
// import ProtectedRouteComp from "./ProtectedRouteComp";

// const ProductDashCompLazyLoad = lazy(() => import("../CRUD/ProductDashComp"));

// const router = createBrowserRouter([
//     // Default routing
//     { path: "", element: <LoginComp /> },
//     // Named routing
//     { path: "login", element: <LoginComp /> },
//     // Child routing
//     {
//         path: "maindashboard",
//         element: <ProtectedRouteComp Component={MainDashboardComp} />,
//         children: [
//             { path: "", element: <MyImagesComp /> },
//             { path: "parent", element: <ParentComp /> },
//             { path: "images", element: <MyImagesComp /> },
//             { path: "event", element: <MyEventComp /> },
//             { path: "form", element: <FormValComp /> },
//             { path: "productadd", element: <ProductAddComp /> },
//             { path: "productedit/:id", element: <ProductEditComp /> },
//             {
//                 path: "productdash",
//                 element: (
//                     <Suspense fallback={<div>Loading...</div>}>
//                         <ProductDashCompLazyLoad />
//                     </Suspense>
//                 ),
//             },
//             {
//                 path: "reacthooks",
//                 element: <ReactHooksComp />,
//                 children: [
//                     { path: "usestate", element: <UseStateHookComp /> },
//                     { path: "useeffect", element: <UseEffectHookComp /> },
//                 ],
//             },
//             { path: "useeffect", element: <UseEffectHookComp /> },
//             // Parameterized routing
//             { path: "classcomp/:id", element: <ClassComp /> },
//         ],
//     },
//     // Wildcard routing
//     { path: "*", element: <PageNotFoundComp /> },
// ]);

// export default router;
