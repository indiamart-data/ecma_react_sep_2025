import ListRoot from '../1_working_with_arrays/ListComponent';
import CrudAssignment from '../2_assignment/CrudAssignment';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <ErrorHandler>
            <div className='container'>
                {/* <ListRoot /> */}
                <CrudAssignment />
            </div>
        </ErrorHandler>
    );
};

export default RootComponent;