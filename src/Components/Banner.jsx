import shop from "../../public/shop.mp4";

const Banner = () => {
    return (
        <div className='relative '>
            <video
                src={shop}
                autoPlay
                loop
                muted
                className="w-full h-auto inset-0 object-cover z-0"
            ></video>

            <div className=' absolute top-[30%] lg:top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white w-full'>
             
                <h2 className='text-green-400 w-[220px] lg:w-[700px] mx-auto text-md lg:text-5xl font-mono w-full  lg:py-2'>
                    <strong>Happy Life Style  is your only <span className=''>unfair  advantage</span></strong>
                </h2>
                <div className='flex flex-row justify-center w-[300px] mx-auto items-center gap-3 pb-2 hidden lg:block'>
                    <p className='text-green-400 text-sm lg:text-2xl font-mono flex items-center'>
                        <strong>100%  orginal Phone</strong>
                        <img className='w-5 lg:w-10 h-auto' src="https://github.com/tailwindcollections/tailwind-organic/blob/main/public/img/vegetable.png?raw=true" alt="" />
                    </p>
                    <img className='w-10 lg:w-20 h-auto' src="https://github.com/tailwindcollections/tailwind-organic/blob/main/public/img/leaf.png?raw=true" alt="" />
                </div>
                <button className='btn btn-xs lg:btn-md   btn-outline btn-success'>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Banner;
