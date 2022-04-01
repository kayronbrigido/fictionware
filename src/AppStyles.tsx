import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import * as darkTheme from "./config/darkTheme.json";

const colors = darkTheme
export const Body = createGlobalStyle`
 body {
   background-color: ${colors.primaryColor}
 }
 * {
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
  color: ${colors.primaryFontColor}
  }
`
