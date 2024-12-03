/* eslint-disable react/no-unknown-property */
// import React from 'react'

import { css } from "@emotion/react";
import { useLoaderData } from "react-router-dom"

export default function Contact() {
  const { name: { first, last, title }, email, picture, cell } = useLoaderData();
  return (
    <section css={css`
        margin:1rem;
        padding:1rem;
        display:grid;
        grid-template-columns:200px 1fr;
        gap:1rem; 
        border:2px solid royalblue;
        border-radius:8px;   
    `}>
      <section>
        <img css={css`
            width:100%; 
            height:100%;
            object-fit:contain;
        `} src={picture.large} alt={first} />
      </section>
      <article>
        <h2>{title}.{first} {last}</h2>
        <h1>Phone:  {cell}</h1>
        <h1>Email:  {email}</h1>
        {/* <h1>Location: {city},{state}</h1> */}
      </article>
    </section>
  );
}
