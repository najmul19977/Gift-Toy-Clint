import React from 'react';
import img1 from '../../../assets/image/Banner/img1.jpg';
import img2 from '../../../assets/image/Banner/img2.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
               
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                  
                
                   
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <div>
                        <h2 className='text-5xl text-white text-center'>Gift Toy!</h2>
                        <p className='text-2xl text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Corrupti voluptates, eos reiciendis accusamus atque rerum sequi <br /> similique odio voluptas provident?</p>
                       
                    </div>
                    
               
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div>
                        <h2 className='text-5xl text-white text-center'>Gift Toy!</h2>
                        <p className='text-2xl text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Corrupti voluptates, eos reiciendis accusamus atque rerum sequi <br /> similique odio voluptas provident?</p>
                       
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div>
                        <h2 className='text-5xl text-white text-center'>Gift Toy!</h2>
                        <p className='text-2xl text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Corrupti voluptates, eos reiciendis accusamus atque rerum sequi <br /> similique odio voluptas provident?</p>
                       
                    </div>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <div>
                        <h2 className='text-5xl text-white text-center'>Gift Toy!</h2>
                        <p className='text-2xl text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Corrupti voluptates, eos reiciendis accusamus atque rerum sequi <br /> similique odio voluptas provident?</p>
                       
                    </div>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;