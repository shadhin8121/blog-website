import React from "react";

function Card() {
    return (
        <div className="w-full md:w-60 lg:w-72 max-h-56 shadow-lg border my-3">
            <h1 className="text-xl capitalize px-3">this is title</h1>
            <p className="text-sm capitalize px-3">this is description</p>
        </div>
    );
}

export default Card;
