import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSlider, MovieList, OutlineButton } from '../components'

import { category,movieType ,tvType} from '../api/tmdbApi'

const Home = () => {
    return (
        <>
            <HeroSlider />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending movie</h2>
                        <Link to='/movie'>
                            <OutlineButton className="small">
                                view more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>top Rated movie</h2>
                        <Link to='/movie'>
                            <OutlineButton className="small">
                                view more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className="small">
                                view more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className="small">
                                view more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    )
}

export default Home
