import React from 'react'
import { useParams } from 'react-router'
import { MovieGrid, PageHeader } from '../components';

import {category as cate} from '../api/tmdbApi';

const Catalog = () => {
    const {category} = useParams();
    console.log(category);
    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movie' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    )
}

export default Catalog
