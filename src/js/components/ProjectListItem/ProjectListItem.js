import React from "react";
import {NavLink} from "react-router-dom";
import APP_ICON from "../../../svg/app.svg";
import CHAT_ICON from "../../../svg/chat.svg";
import CHEVRON from "../../../svg/chevron-right.svg";
import SITE_ICON from "../../../svg/site.svg";
import "./ProjectListItem.css";

function component({id, type, name}) {
    const icon = {app: APP_ICON, chat: CHAT_ICON, site: SITE_ICON}[type];

    return (
        <NavLink to={`/projects/${id}`}
                 className="page-content__section project-list-item">
            <img className="project-list-item__icon" src={icon} alt="" />
            <div className="project-list-item__name" children={name} />
            <img className="project-list-item__arrow" src={CHEVRON} alt="" />
        </NavLink>
    );
}

export const ProjectListItem = component;
