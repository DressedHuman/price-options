import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { price, name, features } = option;
    return (
        <div className='text-center bg-[#dddeee] rounded-xl p-5 flex flex-col gap-2'>
            <h2>
                <span className='text-7xl font-extrabold text'>${price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className="pl-7 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature} />)
                }
            </div>
            <button className='btn text-2xl text-white bg-gray-500 border-none duration-[750ms] hover:btn-primary font-bold'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;