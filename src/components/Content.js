import React from 'react';
import styled from  'styled-components';
export default function Content(props) {
    const {explanation, title} = props;
    console.log(`OVER HERE`,explanation);
    const Contents = styled.div`
    //FILL ME IN
    `;
    return (
        <Contents>
            <div>
            <h3>{title}</h3>
            </div>
            <div>
                <a id="resume-link" href="https://resume.creddle.io/resume/4uxc0m7zngm">My Resume</a>
            </div>
            <div>
                <p>
                    {explanation}
                </p>
            </div>
        </Contents>
    )
}