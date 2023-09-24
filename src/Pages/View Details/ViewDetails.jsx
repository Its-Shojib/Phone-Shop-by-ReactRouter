import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    let { id } = useParams();
    let [phone, setPhone] = useState({});
    let phn = useLoaderData();
    let { image, phone_name, brand_name, price, rating } = phone || {};

    useEffect(() => {
        let findedPhones = phn.find(phn => phn.id === id);
        setPhone(findedPhones)
    }, [id, phn])

    let handleAddToFavorite = () => {
        let favoriteArray = [];
        let favoritesItem = JSON.parse(localStorage.getItem('favorites'));
        if (!favoritesItem) {
            favoriteArray.push(phone);
            localStorage.setItem('favorites', JSON.stringify(favoriteArray));
            alert("Product Added");
        }
        else {
            let isExist = favoritesItem.find(phone => phone.id === id);

            if (!isExist) {
                favoriteArray.push(...favoritesItem, phone)
                localStorage.setItem('favorites', JSON.stringify(favoriteArray));
                alert("Product Added");
            }
            else {
                document.getElementById('my_modal').showModal()
            }




        }
    }


    return (
        <div>
            <div className="min-h-[600px] justify-center items-center flex">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {phone_name}
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {brand_name}
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {price}
                        </p>
                        <p>
                            {rating}
                        </p>

                        <button onClick={handleAddToFavorite} className="rounded-lg py-3 px-6 text-center font-bold  text-pink-500  hover:bg-pink-500/10 ">
                            Add to Favorite
                        </button>

                    </div>
                </div>

            </div>
            {/* Modal Code */}
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal').showModal()}>open modal</button> */}
                <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Already ache tata!!!</h3>
                        <p className="py-4"></p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default ViewDetails;