import React from "react";
import styled from "styled-components";

const DateP = styled.p`
  background-color: mistyrose;
  border:1px #4F4F4F;
  margin: 0% 16.1%;
  padding: 1%;
  
`

export default ({data}) => <DateP>{data.explanation}</DateP>;