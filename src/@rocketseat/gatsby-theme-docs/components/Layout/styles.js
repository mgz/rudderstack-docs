import styled from "@emotion/styled"

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;

  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;
  background: #ffffff;

  @media (max-width: 1023px) {
    grid-template-columns: 100%;
    grid-gap: 0px;
  }

  @media only screen and (max-width: 780px) {
    padding: 0px 24px;
    grid-template-columns: 100%;
  }

  @media only screen and (max-width: 500px) {
    padding: 0px 12px;
  }
`

export const Main = styled.main`
  height: 100%;
  padding-top: 36px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    padding-top: 0;
  }
`

export const Children = styled.div`
  width: 100%;
  max-width: 78%;
  padding-right: 64px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 0;
  }

  h1 {
    padding-bottom: 24px;
    border-bottom: 1px solid #dee2e7;
    color: #3d3d4d;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    margin: 24px 0 16px 0;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #3d3d4d;
  }
  a {
    font-weight: bold;
    text-decoration: underline;
    color: rgb(78,59,151);
    &:hover {
      color: rgb(23,23,110);
      text-decoration: none;
    }
  }
  ul,
  ol {
    color: #6c6c80;
    padding-left: 15px;
    margin: 16px 0px;
    li {
      line-height: 28px;
    }
  }
  li ul,
  li ol {
    margin-bottom: 0;
  }
  p {
    color: #6c6c80;
    margin: 12px 0px;
  }
  strong {
    font-weight: bold;
  }
`
