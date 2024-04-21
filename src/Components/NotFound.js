import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <>
        <h1 className="font-bold text-2xl ">Page not found</h1>
          <p className="bg-gray-200 py-5">Sorry This page does not exist PLease Go to some other Page</p>
          <Link to="/"> Go Back To Home Page</Link>
          </>
    )
}

export default NotFound