import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h2>
            Not Found oopsies
        </h2>
        <p>
            This page does not exist
        </p>
        <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default NotFound