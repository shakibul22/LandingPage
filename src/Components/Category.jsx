import  { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [mobiles, setMobiles] = useState([]);


    useEffect(() => {
        fetch('mobile.json')
            .then(res => res.json())
            .then(data => setMobiles(data)); 
    }, []);

    return (
    <div className='bg-orange-50'>
    <h3 className='text-center font-bold text-2xl pt-5 lg:pt-16 pb-3 lg:pb-12'>Featured Product</h3>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-3 px-2 md:px-[100px]  lg:px-[200px]'>
            {mobiles.map(mobile => (
                <CategoryCard
                    key={mobile.id}
                    id={mobile.id}
                    model={mobile.model}
                    manufacturer={mobile.manufacturer}
                    image={mobile.image}
                />
            ))}
           
        </div>
    </div>
    );
};

export default Category;
