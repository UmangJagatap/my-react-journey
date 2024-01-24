/* eslint-disable react/no-unknown-property */
// import React from 'react'


import { useLoaderData, NavLink } from "react-router-dom"
import { css } from "@emotion/react";


export default function ContactList() {
    const contacts = useLoaderData();
    console.log(contacts);
    return (
        <ul css={css`
            list-style: none;
            padding: 0;
        `}>{

            contacts?.length ? contacts.map((contact) => {
                let {
                    id: { value },
                    name: { first, last },
                } = contact;
                return (
                    <li key={value}>
                        <NavLink css={css({
                            display:'block',
                            padding:'4px',
                            textDecoration: 'none', 
                        })} to={`/contacts/${value}`}>{`${first} ${last}`}</NavLink>
                    </li>
                )
            })
                : null}
        </ul>
    );
}


