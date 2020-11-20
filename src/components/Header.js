
import React from 'react'
import styled from "styled-components"
import Search from './Search'
const El= styled.header`
background: #346;
color: #fff;
text-align:center;
padding: 10px;
  `

export default function Header() {
    return (
      <El>

        <h1> Employee Directory</h1>
        <Search></Search>
      </El>
    )
}
