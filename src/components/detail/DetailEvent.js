import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function DetailEvent() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const eventData = async () => {
        const result = await axios(
            `http://localhost:8000/events/${id}`
        )
        setData(result.data)
    };
    useEffect(() => {
        eventData()
    }, [])

    return (
        <div className="p-24">
            <div className="text-lg mb-4">
                <a className='cursor-pointer text-blue-300' href="/">Home &gt; Event &gt; online &gt; </a>Event 1
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-8 space-y-3">
                    <img className='w-full rounded-lg' src="https://image.freepik.com/free-vector/gradient-abstract-vertical-sale-poster-template_23-2149014123.jpg" alt="" />

                    <div className="space-y-10">
                        <div className="space-y-3">
                            <h2 className="text-4xl font-bold">{data.title}</h2>
                            <div className="flex flex-row space-x-2 items-center justify-between">
                                <p className="bg-blue-300 font-bold rounded-md px-5 py-2 inline-block">Online</p>
                                <div className="flex flex-row space-x-2 items-center">
                                    <a href="/" className="bg-blue-300 hover:bg-black hover:text-blue-300 rounded-full p-3">
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
                                    <a href="/" className="bg-blue-300 hover:bg-black hover:text-blue-300 rounded-full p-3">
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

                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">
                                Description
                            </h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">
                                Date and Time
                            </h3>
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
                                <p>Wednesday, 24 November 2021</p>
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
                                <p>13:30:00 - 15:30:00 WIB</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">
                                Location
                            </h3>
                            <div className="space-x-2 mb-2 flex flex-row">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <p>Online via Zoom</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-4 border-2">
                    2
                </div>
            </div>
        </div >
    )


}


