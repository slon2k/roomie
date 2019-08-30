import React from 'react';
import {Container, Breadcrumb, BreadcrumbItem, Navbar, NavbarItem, Icon, onClickNav, NavbarBurger, NavbarBrand, brand, NavbarMenu, NavbarStart, NavbarLink, NavbarDivider, NavbarDropdown, NavbarEnd, Field, Control, Button} from "bloomer"
import "./app-header.css"
import {Link} from "react-router-dom";

const AppHeader = () => {

    return (
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
            <Container>
                <NavbarBrand>
                    <NavbarItem>
                        <Link to={"/"}><div className={"logo"}>Roomie</div></Link>
                    </NavbarItem>
                </NavbarBrand>
            </Container>

            <NavbarMenu>
                <NavbarStart>
                    <NavbarItem href='../'>Главная</NavbarItem>
                    <NavbarItem href='../'>О проекте</NavbarItem>
                    <NavbarItem href='../faq'>Часто задаваемые вопросы</NavbarItem>
                </NavbarStart>
                <NavbarEnd>
                    <Breadcrumb>
                        <ul>
                            <BreadcrumbItem><a href='../login'>Вход</a></BreadcrumbItem>
                            <BreadcrumbItem><a href='../register'>Регистрация</a></BreadcrumbItem>
                        </ul>
                    </Breadcrumb>
                    <span className="d-flex">
                        <figure className="image is-32x32">
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/32x32.png" alt="Image"/>
                        </figure>
                        <span>
                            Камила К.
                            <Icon className="fa fa-sign-out fa-lg" />
                        </span>
                    </span>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    );
};

export default AppHeader;