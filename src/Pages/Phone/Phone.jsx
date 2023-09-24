import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Phone = ({ phone }) => {
    let { id, image, phone_name, brand_name, price, rating } = phone || {};
    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md space-y-2">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {brand_name}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            ${price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {phone_name}
                    </p>
                    <p>{rating}</p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/phones/${id}`}>
                        <button className=" w-full rounded-lg bg-gray-400 text-black py-3 px-6 text-center font-bold hover:scale-105">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
Phone.propTypes = {
    phone: PropTypes.object
}
export default Phone;