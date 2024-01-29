/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import ContactList from './ContactList';
import './App.css'
import { useState, useRef } from 'react';

function Header({ onSearch }) {

  const searchElementRef = useRef(null);
  function onSubmit(e) {
    e.preventDefault();
    onSearch(searchElementRef.current.value);
  }

  return (
    <header css={css`
          border-bottom: 1px solid;
          padding:1rem;
      `}>
      <form css={css`
            display: flex;
            justify-content: space-between;
        `} onSubmit={onSubmit}>
        <input css={css`
            padding:8px;
        `}
          ref={searchElementRef} type="text" />
        <button>Search</button>
      </form>
    </header>
  );
}


function Sidenav() {

  const [searchText, setSearchText] = useState("");
  function onSearch(text) {
    setSearchText(text);
  }

  return (
    <aside css={css`
        border-right: 1px solid;
        display:grid;
        grid-template-rows:auto 1fr auto;
    `}>
      <Header onSearch={onSearch} />
      <section css={css`
          padding:1rem;
          max-height: 40rem;
          overflow: auto;
      `}>
        <ContactList searchText={searchText} />
      </section>
      <footer css={css`
          border-top: 1px solid;
          padding:16px;
      `}>footer</footer>
    </aside>

  );
}

function Contacts() {
  return (
    <section >
      <Outlet />
    </section>
  );

}

export function Layout() {
  return (
    <main css={css`
      display:grid;
      grid-template-columns: minmax(250px, 25%)1fr;
      height: 100%;
    `}>
      <Sidenav />
      <Contacts />

    </main>

  );
}


