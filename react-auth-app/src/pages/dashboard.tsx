import { useContext } from "react";
import { UserContext } from "../context/authContext";

export default function Dashboard() {
    const {user} = useContext(UserContext);
    return (
        <div className="mt-20 min-h-screen bg-gray-100 p-8 rounded-lg min-w-full">
            <div className="max-w-12xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
                <p className="text-lg text-gray-700 mb-6">Welcome back, {user}!</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h2>
                        <p className="text-3xl font-bold text-blue-600">1,234</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Active Sessions</h2>
                        <p className="text-3xl font-bold text-green-600">456</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Revenue</h2>
                        <p className="text-3xl font-bold text-purple-600">$12.5K</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome</h2>
                    <p className="text-gray-600">You are logged in to your dashboard.</p>
                </div>
            </div>
        </div>
    );
}