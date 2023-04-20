import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from 'react-slick';
import { setCategory, setFilteredBlogs } from "../../../features/blogs.slice";

function StringCarousel() {

    const { selectedCategory } = useSelector((state) => state.blogsData)
    const { allCategories } = useSelector(state => state.blogsData)

    const active = "text-amber-400 border-b-[1px] border-amber-400 pb-2 mr-4 truncate"
    const dispatch = useDispatch()

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <div className="mb-8 w-[90%] content-center self-center m-4 md:m-0 md:ml-16">

            <Slider {...settings}>
                {
                    allCategories ?
                    Object.keys(allCategories).sort().map((cat) => (
                        <button 
                        key={cat}
                        onClick={() => { 
                            
                            dispatch(setFilteredBlogs(cat))
                            dispatch(setCategory(cat)) 
                        }} 
                            className={selectedCategory === cat ? active : "truncate"}>{cat}</button>
                    )
                    ) : <></>
                }
            </Slider>
        </div>
    );
}


export default StringCarousel;