/* eslint-disable react/no-unknown-property */
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import ContactList from './ContactList';
import './App.css'

function Sidenav() {
  return (
    <aside css={css`
        border-right: 1px solid;
        display:grid;
        grid-template-rows:auto 1fr auto;
    `}>
      <header css={css`
          border-bottom: 1px solid;
          padding:16px;
      `}>
        <form css={css`
            display: flex;
            justify-content: space-between;
            padding: 8px;
        `}>
          <input type="text" />
          <button>Search</button>
        </form>
      </header>
      <section css={css`
          padding:16px;
      `}>
        <ContactList />
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


