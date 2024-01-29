/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'


import { useLoaderData, NavLink } from "react-router-dom"
import { css } from "@emotion/react";


export default function ContactList({ searchText }) {
    const contacts = useLoaderData() ?? [];
    const filteredContacts = contacts.filter(contact => {
        const { first, last } = contact.name;
        return first.toLowerCase().includes(searchText) || last.toLowerCase().includes(searchText)
    })
    console.log(contacts);
    return (
        <ul css={css`  
            list-style: none;
            padding: 0;
        `}>{

                filteredContacts?.length ? filteredContacts.map((contact) => {
                    let {
                        id: { value },
                        name: { first, last },
                    } = contact;
                    return (
                        <li key={value}>
                            <NavLink css={css({
                                display: 'block',
                                padding: '4px 8px',
                                textDecoration: 'none',
                                color: 'royalblue',
                                "&.active": {
                                    backgroundColor: 'royalblue',
                                    color: 'white',
                                    borderRadius: '8px',
                                },
                            })} to={`/contacts/${value}`}>{`${first} ${last}`}</NavLink>
                        </li>
                    )
                })
                    : null}
        </ul>
    );
}


