import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorite = () => {
    let [favorites, setFavorites] = useState([]);
    let [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let favoriteItem = JSON.parse(localStorage.getItem('favorites'));
        if (favoriteItem) {
            setFavorites(favoriteItem);

            const total = favoriteItem.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

            setTotalPrice(total)
        }
        else {
            setNoFound('No data found')
        }
    }, []);

    const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNoFound("No Data Found");
    };
    return (
        <div className="min-h-screen">
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    {favorites.length > 0 && (
                        <div>
                            <button
                                onClick={handleRemove}
                                className="px-5 bg-green-200 block mx-auto"
                            >
                                Deleted All favorites
                            </button>

                            <h1>Total price : {totalPrice}</h1>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-5">
                        {
                            isShow ? favorites.map((phone) => (
                                <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                            ))

                                : favorites.slice(0, 2).map((phone) => (
                                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                                ))
                        }
                    </div>

                    {favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
                        {isShow ? "See less" : "See more"}
                    </button>}
                </div>
            )}
        </div>
    );
};

export default Favorite;