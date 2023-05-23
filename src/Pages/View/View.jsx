import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>View page</h2>
        </div>
    );
};

export default View;