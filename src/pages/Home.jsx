import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSlider, OutlineButton } from '../components'

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
                </div>
            </div>
        </>
    )
}

export default Home
