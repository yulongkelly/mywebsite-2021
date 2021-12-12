import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 800px;
    z-index: -1;
`

export const Video = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    color: transparent;
`

export const Content = styled.div`
    color: white;
    position: absolute;
`