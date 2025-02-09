import React, { useState, useEffect } from "react";
import Load from "./loading";
import { motion } from "framer-motion";

const Card = () => {
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.results[0]);
                setUserInfo(data.info);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error fetching the profile", error);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-4">
                <Load />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-4">
                <p className="text-red-400 text-lg font-semibold">Failed to fetch user data...</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-6">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-8 bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 sm:p-12 w-full max-w-4xl border border-gray-200/30"
            >
                {/* Left Section - Profile Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                        <img
                            className="w-full h-full object-cover"
                            src={user.picture.large}
                            alt="Profile"
                        />
                    </div>
                </motion.div>

                {/* Right Section - User Information */}
                <div className="flex flex-col justify-center text-center sm:text-left text-white">
                    <h2 className="text-3xl font-bold">
                        <span className="text-blue-400">{user.name.title}</span> {user.name.first} {user.name.last}
                    </h2>
                    <p className="text-lg font-medium text-gray-200 capitalize">{user.gender}</p>
                    <p className="text-sm text-gray-300">{user.dob.age} years old (Born: {new Date(user.dob.date).toLocaleDateString()})</p>
                    <p className="text-lg text-gray-200">{user.phone}</p>
                    <p className="text-lg text-gray-200">{user.email}</p>
                    <p className="text-lg text-gray-200">{user.cell}</p>

                    {/* Address and Additional Details */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
                        {/* Address Box */}
                        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg p-4 sm:p-5 w-full sm:w-1/2 text-center text-white">
                            <p className="font-semibold">{user.location.street.number}, {user.location.street.name}</p>
                            <p>{user.location.city}, {user.location.state}</p>
                            <p>{user.location.country}</p>
                            <p>ZIP: {user.location.postcode}</p>
                            <p>Coordinates: {user.location.coordinates.latitude}, {user.location.coordinates.longitude}</p>
                        </div>

                        {/* User Login Box */}
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg p-4 sm:p-5 w-full sm:w-1/2 text-center text-white">
                            <p className="truncate">UUID: {user.login.uuid}</p>
                            <p>Username: {user.login.username}</p>
                            <p>Password: {user.login.password}</p>
                            <p>Salt: {user.login.salt}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
