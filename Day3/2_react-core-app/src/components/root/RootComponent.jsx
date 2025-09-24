// import ComponentOne from '../2_multi-components/ComponentOne'
// import ComponentTwo from '../2_multi-components/ComponentTwo'

// import ComponentOne from '../3_inline-style/ComponentOne'
// import ComponentTwo from '../3_inline-style/ComponentTwo'

// import ComponentOne from '../4_external-css/comp-one/ComponentOne'
// import ComponentTwo from '../4_external-css/comp-two/ComponentTwo'

import { useState } from 'react';
import ComponentOne from '../5_css-modules/comp-one/ComponentOne'
import ComponentTwo from '../5_css-modules/comp-two/ComponentTwo'
import ComponentWithState from '../6_comp-state/ComponentWithState';
import ComponentWithProps from '../7_comp-props/ComponentWithProps';
import COne from '../7_comp-props/COne';
import CTwo from '../7_comp-props/CTwo';

// const data = { id: 1, name: "Manish", address: { city: "Pune", state: "MH" } };

const RootComponent = () => {
    const [data, setData] = useState({ id: 1, name: "Manish", address: { city: "Pune", state: "MH" } });

    return (
        <div className='container'>
            {/* <ComponentOne />
            <ComponentTwo /> */}

            {/* <ComponentWithState /> */}
            <ComponentWithProps id={1} name={"Manish"} address={{ city: "Pune", state: "MH" }} />

            <COne data={data} setData={setData}/>
            <CTwo data={data} />
        </div>
    );
};

export default RootComponent;