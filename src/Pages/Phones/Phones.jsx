import { useLoaderData } from "react-router-dom";
import Phone from './../Phone/Phone';


const Phones = () => {
    let phones = useLoaderData();
    console.log(phones);

    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-bold">Our featured phones...</h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
            
        </div>
    );
};

export default Phones;