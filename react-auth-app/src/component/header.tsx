import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };
    return (
        <header className="mb-10 fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Auth App</h1>
            <button
                onClick={onLogout}
                className="bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded transition"
            >
                Logout
            </button>
            </div>
        </header>
    );
};

export default Header;