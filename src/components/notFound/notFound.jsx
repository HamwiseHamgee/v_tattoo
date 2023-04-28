import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>Uh oh! Looks like that page doesn't exist.</h1>
            <Link to='/'>Go Home</Link>
        </div>
    )
}

export default NotFound;