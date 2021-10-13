import React from 'react'
import './MovieCard.scss';

import {category} from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { AiFillPlayCircle } from "react-icons/ai";

export const MovieCard = (props) => {
    const item = props.item;
    const link = '/'+category[props.category]+ '/'+item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage:`url(${bg})` }}>
                <Button >
                    <span><AiFillPlayCircle /></span>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}
