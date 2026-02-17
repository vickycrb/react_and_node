import React, { useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
        gender: "",
        role: "",
        file: null as File | null,
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
        }
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.role) newErrors.role = "Role is required";
        if (!formData.file) newErrors.file = "File upload is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
            try {
      // The endpoint is relative to the baseURL defined in api.js
      const response = await axios.post('/auth/signup', formData); 
       if(response.status === 201) {
        navigate('/login');
      } else {
        alert(response.data.message || 'Registration failed');
        setFormData({
            username: "",
            password: "",
            email: "",
            confirmPassword: "",
            gender: "",
            role: "",
            file: null,
        });
      }
    } catch (error:string | any) {
      console.error('Error details:', error.message);
    }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-20">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm">{errors.username}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                        )}
                    </div>
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                    </div>
                    {/* Gender */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender
                        </label>
                        <div className="space-y-2">
                            {["Male", "Female", "Other"].map((g) => (
                                <label key={g} className="flex items-center inline-flex mr-4">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={g}
                                        checked={formData.gender === g}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    {g}
                                </label>
                            ))}
                        </div>
                        {errors.gender && (
                            <p className="text-red-500 text-sm">{errors.gender}</p>
                        )}
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Role
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="superadmin">Super Admin</option>
                            <option value="user">User</option>
                            <option value="moderator">Moderator</option>
                        </select>
                        {errors.role && (
                            <p className="text-red-500 text-sm">{errors.role}</p>
                        )}
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Upload Profile Picture
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {formData.file && (
                            <p className="text-sm text-gray-600 mt-1">{formData.file.name}</p>
                        )}
                        {errors.file && (
                            <p className="text-red-500 text-sm">{errors.file}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-700"
                    >
                        Register
                    </button>
                    <div>
                        <p className="text-center text-gray-600 text-sm">
                            Already have an account?{' '}
                           <Link to="/login" className="text-blue-600 hover:underline cursor-pointer">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}