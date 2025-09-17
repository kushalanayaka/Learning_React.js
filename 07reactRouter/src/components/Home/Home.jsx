import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white">
            {/* HERO SECTION */}
            <aside className="relative overflow-hidden rounded-lg bg-white text-black sm:mx-16 mx-4 my-10 border border-gray-200 shadow-md">
                <div className="relative z-10 px-4 py-20 sm:py-32 sm:px-10 flex flex-col-reverse sm:flex-row items-center justify-between">
                    {/* TEXT CONTENT */}
                    <div className="max-w-md sm:max-w-xl text-center sm:text-left">
                        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
                            Download Now
                            <span className="block text-orange-700">Joy with Awesomeness</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Start your journey with our platform. Click below to get started.
                        </p>

                        <Link
                            className="mt-6 inline-flex items-center px-6 py-3 bg-orange-700 text-white text-base font-semibold rounded-md shadow hover:bg-orange-800 transition"
                            to="/"
                        >
                            <svg
                                role="img"
                                fill="white"
                                width="20"
                                height="20"
                                className="mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download Now
                        </Link>
                    </div>

                    {/* HERO IMAGE */}
                    <figure className="w-full sm:w-1/2 mb-10 sm:mb-0 flex justify-center">
                        <img
                            src="https://media.istockphoto.com/id/1172220653/vector/people-with-smartphones.jpg?s=612x612&w=0&k=20&c=jEV_NrcvfOn41kge59jZY4olUcJH-QkCTIRXS1FVyzQ="
                            alt="Clock representing productivity"
                            loading="lazy"
                            className="w-72 sm:w-96 object-cover rounded-lg shadow"
                        />
                    </figure>
                </div>
            </aside>

            {/* MID SECTION IMAGE */}
            <div className="grid place-items-center sm:mt-20 mt-12">
                <figure>
                    <img
                        className="sm:w-96 w-48 object-cover rounded-lg shadow"
                        src="https://cdn.pixabay.com/photo/2019/05/08/07/45/friends-4187953_1280.png"
                        alt="Friends collaborating on a creative project"
                        loading="lazy"
                    />
                </figure>
            </div>

            {/* FOOTER CTA */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-semibold text-gray-800">
                Meet Up
            </h1>
        </div>
    );
}
