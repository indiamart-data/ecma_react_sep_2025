// import React, { Component } from 'react';

import { useState } from "react";

// class ComponentWithState extends Component {
//     constructor() {
//         super();
//         this.state = { name: "Manish" };
//         this.message = "Hi";
//         console.log("Ctor, State:", this.state);
//     }

//     render() {
//         console.log("Render, State:", this.state);

// return (
//     <div>
//         <h1 className="text-primary text-center">Component With State</h1>
//         <h2 className="text-success">Hello, {this.state.name}</h2>
//         <h2 className="text-success">{this.message}</h2>
//     </div>
// );
//     }
// }

// export default ComponentWithState;

// --------------------------------------------------
const ComponentWithState = function () {
    const [name] = useState("Manish");
    
    return (
        <div>
            <h1 className="text-primary text-center">Component With State</h1>
            <h2 className="text-success">Hello, {name}</h2>
        </div>
    );
}

export default ComponentWithState;