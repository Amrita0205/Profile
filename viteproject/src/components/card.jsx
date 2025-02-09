import React, { useState, useEffect } from "react";
import Load from "./loading";
import { motion } from "framer-motion";

const Card = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.results[0]);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error fetching the profile", error);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4 min-h-screen">
                <Load />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center bg-gradient-to-br from-gray-900 via-red-600 to-gray-900 p-4 min-h-screen">
                <p className="text-white text-xl">Failed to fetch user data...</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center bg-black min-h-screen p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.7, ease: "easeOut" }}
                // whileHover={{
                // scale: 1.05
                style={{

                    boxShadow: "0px 10px 30px rgba(147, 51, 234, 0.4)",
                }}
                // transition: { duration: 0.5, ease: "easeOut" }
                // }}
                className="flex flex-col sm:flex-row gap-8 bg-white/1 backdrop-blur-lg shadow-2xl rounded-2xl p-8 sm:p-12 w-full max-w-4xl border border-gray-200/30"
            >
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 30px rgba(147, 51, 234, 0.4)",
                            transition: { duration: 0.5, ease: "easeOut" }
                        }}
                        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg border-1 border-gray-700"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={user.picture.large}
                            alt="Profile"
                        />
                        {/* Tailwind CSS auto handles the responsiveness of the given tags */}
                    </motion.div>
                    {/* <p className=" mt-8 text-sm md:text-base text-gray-400 italic font-medium">
                {user.registered.date}
              </p>
              <p className=" mt-1 text-sm md:text-base text-gray-400 italic font-medium">
                {user.registered.age}
              </p> */}
                    <div className="mt-4 text-xs md:text-sm text-gray-400 italic font-medium">
                        <p>
                            <span className="font-semibold text-gray-300">Joined On: </span>
                               {new Date(user.registered.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-300">Years Since Joining:</span>  {user.registered.age} years
                        </p>
                    </div>

                </motion.div>

                {/* User Information */}
                <div
                    className="flex flex-col justify-center text-center sm:text-left text-white overflow-hidden">
                    <h2 className="text-3xl font-bold">
                        <span className="text-purple-500">{user.name.title}</span> {user.name.first} {user.name.last}
                    </h2>
                    <p className="text-lg font-medium text-gray-200 capitalize">{user.gender}</p>
                    <p className="text-gray-300 text-sm">
                        {user.dob.age} years old (Born: {new Date(user.dob.date).toLocaleDateString()})
                    </p>
                    <p ><span className="text-sm font-semibold text-purple-400">Nationality: </span><span className=" text-gray-300">{user.location.country}</span></p>


                    {/* Scrolling Data Section */}
                    <div className="relative overflow-hidden mt-5">
                        <motion.div
                            className="flex space-x-8 p-5"
                            animate={{ x: ["0%", "-50%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            style={{ display: "flex", whiteSpace: "nowrap" }}

                        >
                            {/* Contact Details */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 20px rgba(147, 51, 234, 0.4)",
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }}
                                className="bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 p-6 rounded-xl shadow-xl text-gray-200 border border-gray-600 w-full max-w-md"
                            >

                                <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-500 pb-2">
                                    Contact Details
                                </h3>

                                {/* Contact Information */}
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-bold text-gray-100">Email:</span><span className="text-gray-200"> {user.email}</span></p>
                                    <p><span className="font-bold text-gray-100">Phone number:</span><span className="text-gray-200"> {user.phone}</span></p>
                                    <p><span className="font-bold text-gray-100">Cell number:</span><span className="text-gray-200"> {user.cell}</span></p>

                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 20px rgba(147, 51, 234, 0.4)",
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }}
                                className="bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 p-6 rounded-xl shadow-xl text-gray-200 border border-gray-600 w-full max-w-md "
                            >
                                {/* Section Header */}
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-500 pb-2">
                                    Location Details
                                </h3>

                                {/* Location Information */}
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-bold text-gray-100">Street:</span><span className="text-gray-200"> {user.location.street.number}</span></p>
                                    <p><span className="font-bold text-gray-100">City:</span><span className="text-gray-200"> {user.location.city}</span></p>
                                    <p><span className="font-bold text-gray-100">State:</span><span className="text-gray-200"> {user.location.state}</span></p>
                                    <p><span className="font-bold text-gray-100">Country:</span><span className="text-gray-200"> {user.location.country} - {user.location.postcode}</span></p>
                                </div>
                            </motion.div>

                            {/* Login Information Card */}
                            {/* <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 20px rgba(147, 51, 234, 0.4)",
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }}
                                className="bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 p-6 rounded-xl shadow-xl text-gray-200 border border-gray-600 w-full max-w-md mt-4"
                            >
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-500 pb-2">
                                    Login Details
                                </h3>

                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium text-gray-100">Username:</span> {user.login.username}</p>
                                    <p><span className="font-medium text-gray-100">Password:</span> {user.login.password}</p>
                                    <p><span className="font-medium text-gray-100">UUID:</span> {user.login.uuid}</p>
                                </div>
                            </motion.div> */}

                            {/* Registration Details Card */}
                            {/* <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 20px rgba(147, 51, 234, 0.4)",
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }}
                                className="bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 p-6 rounded-xl shadow-xl text-gray-200 border border-gray-600 w-full max-w-md mt-4"
                            >
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-500 pb-2">
                                    Registration Details
                                </h3>

                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium text-gray-100">Registered On:</span> {new Date(user.registered.date).toLocaleDateString()}</p>
                                    <p><span className="font-medium text-gray-100">Years Since Registration:</span> {user.registered.age}</p>
                                </div>
                            </motion.div> */}

                            {/* User ID Information */}
                            {/* <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 20px rgba(147, 51, 234, 0.4)",
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }}
                                className="bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 p-6 rounded-xl shadow-xl text-gray-200 border border-gray-600 w-full max-w-md mt-4"
                            >
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-500 pb-2">
                                    User ID Information
                                </h3>

                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium text-gray-100">ID Name:</span> {user.id.name}</p>
                                    <p><span className="font-medium text-gray-100">ID Value:</span> {user.id.value || "N/A"}</p>
                                </div>
                            </motion.div> */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 20px rgba(147, 51, 234, 0.4)",
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }}
                                className="bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 p-6 rounded-xl shadow-xl text-gray-200 border border-gray-600 w-full max-w-md"
                            >
                                {/* Section Header */}
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-500 pb-2">
                                    Location Details
                                </h3>

                                {/* Location Information */}
                                <div className="space-y-2 text-sm">

                                    <p><span className="font-bold text-gray-100">Latitude:</span><span className="text-gray-200"> {user.location.coordinates.latitude}</span></p>
                                    <p><span className="font-bold text-gray-100">Longitude:</span><span className="text-gray-200"> {user.location.coordinates.longitude}</span></p>
                                    {/* <p><span className="font-bold text-gray-100">Timezone:</span><span className="text-gray-200"> {user.location.timezone.offset},{user.location.timezone.description} </span></p> */}
                                    <p>
                                        <span className="font-bold text-gray-100">Timezone:</span>
                                        <span className="text-gray-200"> {user.location.timezone.offset}</span><br />
                                        <span className="text-gray-200">{user.location.timezone.description}</span>
                                    </p>

                                    {/* <p><span className="font-bold text-gray-100">Timezone Region:</span><span className="text-gray-200"> {user.location.timezone.description}</span></p> */}


                                </div>
                                {/* <p><span className="font-medium text-gray-100">City:</span> {user.location.city}</p>
                                    <p><span className="font-medium text-gray-100">State:</span> {user.location.state}</p>
                                    <p><span className="font-medium text-gray-100">Country:</span> {user.location.country} - {user.location.postcode}</p>
                                    <p><span className="font-medium text-gray-100">Latitude:</span> {user.location.coordinates.latitude}</p>
                                    <p><span className="font-medium text-gray-100">Longitude:</span> {user.location.coordinates.longitude}</p> */}

                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </motion.div >
        </div >
    );
};

export default Card;