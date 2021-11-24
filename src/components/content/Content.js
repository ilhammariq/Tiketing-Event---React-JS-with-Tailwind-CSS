import React, { useState, useEffect } from 'react'
import Popular from './popular/Popular'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import CapitalFormat from '../../helpers/CapitalFormat';

export default function Content() {
    const [events, setEvent] = useState({ popular: [], upcoming: [] })
    const eventData = async () => {
        const resPop = await axios
            ('http://localhost:8000/popular')
        const resUp = await axios
            ('http://localhost:8000/events')
        setEvent({ popular: resPop.data, upcoming: resUp.data })
    }
    useEffect(() => {
        eventData()
    }, [])

    var settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='p-12 space-y-16 bg-gray-700 text-white'>
            <section id='popular'>
                <h2 className='text-3xl font-bold mb-2'>Popular Events</h2>
                <p className='mb-2'>Find the most popular events and get your ticket.</p>
                <Slider {...settings}>
                    {events.popular.map((item, index) =>
                        <div key={index}>
                            {
                                item.event_detail.map((items, index) =>
                                    <Popular
                                        key={index}
                                        id={item.id}
                                        title={item.title}
                                        img={item.img}
                                        type={CapitalFormat(items.type)}
                                        date={items.date}
                                        address={CapitalFormat(item.address)}
                                        time_start={items.time_start}
                                        time_end={items.time_end} />
                                )
                            }
                        </div>
                    )}
                </Slider>
            </section>
            <section id='upcoming'>
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className='text-3xl font-bold mb-2'>Upcoming Events</h2>
                        <p className='mb-2'>Let's see what's coming this week, save the date, and don't miss it!.</p>
                    </div>
                    <a href='/' className="text-white text-xl px-12 flex items-center font-bold rounded-md hover:text-blue-300">
                        SEE ALL
                    </a>
                </div>

                <Slider {...settings}>
                    {events.upcoming.map((item, index) =>
                        <div key={index}>
                            {
                                item.event_detail.map((items, index) =>
                                    <Popular
                                        key={index}
                                        id={item.id}
                                        title={item.title}
                                        img={item.img}
                                        type={CapitalFormat(items.type)}
                                        date={items.date}
                                        address={CapitalFormat(item.address)}
                                        time_start={items.time_start}
                                        time_end={items.time_end} />
                                )
                            }
                        </div>
                    )}
                </Slider>
            </section>
        </div>
    )
}

