import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../../Components/CategoryCard';

const Products = () => {
    const [mobiles, setMobiles] = useState([]);
    const [all,setAll]= useState(false);
    const handleViewAll=()=>{
        setAll(!all);
    }

    useEffect(() => {
        fetch('mobile.json')
            .then(res => res.json())
            .then(data => setMobiles(data.slice(0, 4))); // Slice to get only the first 4 items
    }, []);

    return (
    <div className='bg-orange-50 pt-16'>
  
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
           <Link to='/products'> <button onClick={handleViewAll} className='bg-green-400 border-b-2  px-3 py-2 rounded-lg'>View All</button></Link>
        </div>
    </div>
    );
};

export default Products;