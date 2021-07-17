import React from 'react';
import styled from  'styled-components';

export default function Pic(props){
    const {pic} = props;
    
    const Image = styled.img `
    border: 1px solid black;
    margin: 1rem 0 1rem 0 ;
    height: 60vh; `
    return (
        <div>
            <Image src={pic} alt="Nasa Space Photo"/>
        </div>
    )
}