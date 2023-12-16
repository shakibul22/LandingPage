import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 justify-between items-center px-3 lg:px-28'>
         <div className='flex flex-col justify-between gap-4 w-full'>
         <div className='flex flex-row justify-between items-center gap-3 w-full '>
            <p className='text-green-400 text-2xl font-mono flex items-center'><strong>100%  organic Food</strong><img className='w-10 h-auto' src="https://github.com/tailwindcollections/tailwind-organic/blob/main/public/img/vegetable.png?raw=true" alt="" /> </p><img className='w-20 h-auto' src="https://github.com/tailwindcollections/tailwind-organic/blob/main/public/img/leaf.png?raw=true" alt="" />
            </div>
            <h2 className='text-6xl font-mono w-full py-2'><strong>Healthy Life Style <br /> is your only <span className='text-green-400'>unfair <br /> advantage</span></strong> </h2> 
            <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nobis minima alias autem blanditiis modi, dicta vitae nesciunt! At, et fuga minus maxime possimus in </p>
            <button className='btn bg-green-400 px-5 py-3 rounded border-2 border-gray-300 hover:-translate-y-1 hover:scale-110 hover:bg-green-100 duration-300 ...'>Get Started</button>
         </div>
            <div className='w-full'>
                <img src="https://github.com/tailwindcollections/tailwind-organic/blob/main/public/img/dish.png?raw=true" alt="" />
            </div>
        </div>
    );
};

export default Banner;