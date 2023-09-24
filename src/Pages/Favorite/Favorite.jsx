import { useEffect, useState } from "react";


const Favorite = () => {
    let [favorites,setFavorites] = useState([]);
    let [noFound,setNoFound] = useState('');

    useEffect(()=>{
       let favoriteItem = JSON.parse(localStorage.getItem('favorites'));
       if(favoriteItem){
           setFavorites(favoriteItem);
       }
       else{
        setNoFound('No data found')
       }
    },[])
    console.log(favorites);
    return (
        <div className="min-h-screen">
            {
                noFound ? <p>{noFound}</p> : <div>
                    
                </div>
            }
        </div>
    );
};

export default Favorite;