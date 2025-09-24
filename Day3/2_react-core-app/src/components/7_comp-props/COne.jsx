import React from 'react';

const COne = (props) => {
    // props.data.id = 2;
    // props.data.name = "Abhijeet";
    // props.data.address.city = "Mumbai";

    // props.setData({ id: 2, name: "Abhijeet", address: { city: "Mumbai" } });

    return (
        <div>
            {JSON.stringify(props)}
        </div>
    );
};

export default COne;