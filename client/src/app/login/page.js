import React from "react";

const page = () => {
    return (
        <div className="flex justify-center items-center mt-11">
            <div className="w-full md:w-72 lg:w-96 bg-gray-300 p-6 rounded-lg">
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="mb-2">
                        Enter your Email
                    </label>
                    <input
                        className="w-full p-2 border border-gray-400 rounded"
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="mb-2">
                        Enter your password
                    </label>
                    <input
                        className="w-full p-2 border border-gray-400 rounded"
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
