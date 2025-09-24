// npm i prop-types

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h2 className="text-primary">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-primary">You are from, {this.props.city}</h2>
//             </>
//         );
//     }

//     // static get defaultProps() {
//     //     return {
//     //         name: "Manish",
//     //         city: "Pune"
//     //     };
//     // }

//     static get propTypes() {
//         return {
//             name: PropTypes.string.isRequired,
//             city: PropTypes.string.isRequired
//         }
//     }
// }

const PropTypesComponent = (props) => {
    return (
        <>
            <h2 className="text-primary">Hello, {props.name.toUpperCase()}</h2>
            <h2 className="text-primary">You are from, {props.city}</h2>
        </>
    );
};

PropTypesComponent.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
}

const PropTypesRoot = () => {
    return (
        <>
            <PropTypesComponent name={"abhijeet"} city={"Mumbai"} />
        </>
    );
};

export default PropTypesRoot;