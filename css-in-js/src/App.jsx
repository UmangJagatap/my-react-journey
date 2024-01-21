/* eslint-disable react/no-unknown-property */
// import { useState } from 'react'
import './App.css'
import { css } from "@emotion/react";

const button = css`
padding: 8px;
color: white;
`;

const primary = css`
background-color:hotpink;
`;

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div
        css={css({
          backgroundColor: "lightGray",
          color: "white",
          "&:hover": {
            backgroundColor: "hotpink",
            cursor: "pointer",
          },
        })}>
        <section
          css={css`
        display:grid;
        grid-template-rows:auto 200px;
        `}>
          <h1>this is section</h1>
          <p>this is paragraph</p>
        </section>
      </div>
      <div>
        <button css={button}>Button</button>
        <button css={primary}>Primary</button>
      </div>

    </>
  )
}

export default App
