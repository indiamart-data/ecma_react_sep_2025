// import React, { Component } from 'react';

// class ComponentWithProps extends Component {
//     constructor(props) {
//         super(props);

//         // this.props = { name: "Abhijeet" };          // Error
//         // this.props.name = "Abhijeet";

//         // Reference Copy
//         // this.state = this.props;

//         // Shallow Copy
//         // this.state = { ...this.props };

//         // Deep Copy
//         this.state = JSON.parse(JSON.stringify(this.props));

//         // Lodash
//         // Immer JS
//         // Immutable JS

//         this.state.name = "Abhijeet";
//         this.state.address.city = "Mumbai";

//         console.log("Ctor, State: ", this.state);
//         console.log("Ctor, Props: ", this.props);
//     }
//     render() {
//         console.log("Render, State: ", this.state);
//         console.log("Render, Props: ", this.props);

//         return (
//             <>
//                 <h1 className="text-primary text-center">Component With Props</h1>
//             </>
//         );
//     }
// }

// export default ComponentWithProps;

// -----------------------------------

import React, { useState } from 'react';

// const ComponentWithProps = (props) => {
//     const [data] = useState(JSON.parse(JSON.stringify(props)));

//     return (
//         <>
//             <h1 className="text-primary text-center">Component With Props</h1>
//         </>
//     );
// };


const ComponentWithProps = ({ id, name }) => {
    return (
        <>
            <h1 className="text-primary text-center">Component With Props</h1>
        </>
    );
};

export default ComponentWithProps;