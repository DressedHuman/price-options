import PropTypes from 'prop-types'
import { AiFillCheckCircle } from 'react-icons/ai'

const Feature = ({feature}) => {
    return (
        <div className='my-3'>
            <p className='flex items-center justify-self-start'><AiFillCheckCircle className='text-green-700 mr-2'/>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature : PropTypes.string,
}

export default Feature;