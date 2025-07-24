import React from 'react'

function Card({name, caption = "Amazing image"}) {
    return (
        <>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <img
                    className="w-full h-64 object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80"
                    alt="Example"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 bg-blue-400 " >{name}</h2>
                    <p className="text-gray-600">{caption} </p>
                </div>
            </div>
        </>
    );
}

export default Card