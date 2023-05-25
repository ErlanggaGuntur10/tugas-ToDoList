import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div>
            <h1>Halaman tidak ditemukan</h1>
            <Link to="/">
                <button>Kembali ke Home</button>
            </Link>
        </div>
    ) ;
}

export default ErrorPage