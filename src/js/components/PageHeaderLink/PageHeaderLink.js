import React from "react";
import {NavLink} from "react-router-dom";
import "./PageHeaderLink.css";

function component({to, name}) {
    return (
        <li className="page-header__item">
            <NavLink
                to={to}
                children={name}
                className={({isActive}) => isActive ?
                    "page-header__link page-header__link_active" :
                    "page-header__link"
                }
            />
        </li>
    );
}

export const PageHeaderLink = component;
