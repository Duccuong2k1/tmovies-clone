import React, { useEffect, useRef } from 'react';
import { Link,useLocation } from 'react-router-dom';
import './Header.scss';
import { RiMovie2Fill } from "react-icons/ri";

const headerNav = [
    {
        display:'Home',
        path:'/'
    },
    {
        display:'Movie',
        path:'/movie'
    },
    {
        display:'TV series',
        path:'/tv'
    }
]


export const Header = () => {
    // active nav
    const { pathname } = useLocation();

    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathname);
    useEffect(() => {
        const shrinkHeader = ()=>{
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            }else{
                headerRef.current.classList.remove('shrink');

            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
            
        }
    }, [])

    return (
        <div className="header" ref={headerRef}>
            <div className="header__wrap container">
                <div className="logo">
                    <span><RiMovie2Fill /></span>
                    <Link to='/'>
                        <h2>TMovie</h2>
                    </Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e,i)=>(
                            <li key={i} className={`${i === active ? 'active':''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
