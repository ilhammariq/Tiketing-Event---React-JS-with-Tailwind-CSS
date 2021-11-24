import React from 'react';
import UseScrollanchor from '../helpers/UseScrollanchor';
import DetailEvent from '../components/detail/DetailEvent'


const Detail = () => {
    UseScrollanchor();
    return (
        <>
            <DetailEvent />
        </>
    );
};

export default Detail;