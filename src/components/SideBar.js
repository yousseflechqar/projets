import React from 'react'
import { Link, NavLink } from "react-router-dom";


import './sideBar.css'
let SideBar = () => {


    const SideItem = ({ url, label, children=(<i className="fas fa-bars"></i>) }) => (
        <div className="side-item">
            
            <NavLink exact className="side-link" activeClassName="active" to={url}>
                {children}
                <label>{label}</label>
            </NavLink>
        </div>
        // <div className="side-item">
        //     <i class="fas fa-bars"></i>
        //     <NavLink exact className="side-link" activeClassName="active" to={url}>{label}</NavLink>
        // </div>
    )

    return (

        <div className="side-bar">


            <div className="nav-bar">

                <SideItem label="Tableau de bord" url="/projets/dashboard" >
                    <i className="fas fa-chart-bar"></i>
                </SideItem>
                <SideItem label="Ajouter Projet" url="/projets/new" >
                    <i className="fas fa-industry"></i>
                </SideItem>
                <SideItem label="Liste des Projets" url="/projets" >
                    <i className="fas fa-poll-h"></i>
                </SideItem>
                <SideItem label="Liste des Marchés" url="/marches" />
                <SideItem label="Liste des Conventions" url="/conventions" />
                <SideItem label="Gestion des localisations" url="/localisations" >
                    <i className="fas fa-map-marker-alt"></i>
                </SideItem>
                <SideItem label="Gestion des utilisateurs" url="/users" >
                    <i className="fas fa-users-cog"></i>
                </SideItem>

            </div>

        </div>
    )

}

export default SideBar