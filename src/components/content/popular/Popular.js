import React from 'react'
import { Link } from 'react-router-dom';

export default function Popular(props) {
    return (
        <div className="group bg-cover shadow-lg m-4 rounded-lg w-96 h-96" style={{ backgroundImage: 'url(' + props.img + ')' }}>
            <div className="text-gray-700 h-full rounded-lg flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100 bg-blue-200 bg-opacity-75 transition duration-500 ease-in-out">
                <Link to={{ pathname: `detail/${props.id}` }} className="text-2xl hover:underline font-bold mb-2">
                    {props.title}
                </Link>
                <div>
                    <div className="mb-2">
                        <p className="bg-blue-300 font-bold rounded-md px-5 py-2 inline-block">
                            {props.type}
                        </p>
                    </div>
                    <div className="space-x-2 mb-2 flex flex-row">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <p>{props.date}</p>
                    </div>
                    <div className="space-x-2 mb-2 flex flex-row">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p>{props.time_start} - {props.time_end} WIB</p>
                    </div>
                    <div className="space-x-2 mb-2 flex flex-row">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <p>{props.address}</p>
                    </div>

                    <div className="flex flex-row space-x-2 items-center justify-between">
                        <button className="bg-blue-300 px-28 font-bold rounded-md py-2 hover:bg-black hover:text-blue-300">
                            Buy
                        </button>
                        <div className="flex flex-row space-x-2 items-center">
                            <a href="/" className="hover:bg-black hover:text-blue-300 rounded-full p-3">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                    />
                                </svg>
                            </a>
                            <a href="/" className="hover:bg-black hover:text-blue-300 rounded-full p-3">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

Popular.defaultProps = {
    title: "Title Event"
}
