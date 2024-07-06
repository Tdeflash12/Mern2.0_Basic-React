import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
    {
        path :"/",
        element :<h1>Hello , This is home page</h1>
    },
    {
        path: "/about",
        element :<h1>hello, This is about page</h1>
    }
])
export default router
