import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './HeroSlider.scss';

import SwiperCore,{Autoplay} from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';

import tmdbApi,{category,movieType} from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Button, OutlineButton } from '../Button/Button';


export const HeroSlider = () => {

    SwiperCore.use([Autoplay]);
    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(1, 5));
                // console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);
    console.log(movieItems);
    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                autoplay={{delay:3000}}
            >
                {
                    movieItems.map((item,index) =>(
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item} isActive={`${isActive ? 'active' : ''}`}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export const HeroSlideItem = props => {
    let history = useHistory();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
    return(
        <div className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + item.id)}>
                            watch now
                        </Button>
                        <OutlineButton onClick={()=> console.log('trailer')}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item_content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}
