import React from 'react';

import GroupBlocks from '../components/group-blocks';
import {Content, Title, Container, Section, Column, Columns} from "bloomer";
import GroupBlock from "../components/group-block";

const HomePage = () => {
    return (
        <Container style={{"background: background": "background: #E5E5E5"}}>
            <Section>
                <p style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "bold",
                    "font-size": "50px",
                    "line-height": "64px",
                    /* identical to box height, or 128% */

                    "text-align": "center",
                    "letter-spacing": "0.892857px",

                    "color": "#292A34"
                }}>
                    Найдите подходящую группу
                </p>
                <GroupBlocks groups={[
                    <GroupBlock/>,
                    <GroupBlock/>,
                    <GroupBlock/>,
                    <GroupBlock/>,
                    <GroupBlock/>,
                    <GroupBlock/>]
                }/>
            </Section>
        </Container>
    );
};

export default HomePage;