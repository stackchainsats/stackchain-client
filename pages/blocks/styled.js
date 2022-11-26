import styled from "styled-components";

// Blocks styles (index.js)
export const BlocksTitle = styled.h1`
  width: 1200px;
  margin: 40px auto 30px auto;
  padding-left: 16px;
`;

export const BlockListWrapper = styled.div`
  box-shadow: rgb(100 116 139 / 6%) 0px 1px 1px,
    rgb(100 116 139 / 10%) 0px 1px 2px;
  background-image: none;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid rgb(240, 240, 240);

  &:first-child {
    color: red;
  }

  h1 {
    width: 1200px;
    margin: 40px auto 20px auto;
    padding-left: 16px;
  }

  color: #212b36;

  .block-column {
    padding: 16px 32px;
  }

  .block-height {
    width: 120px;
    min-width: 120px;
  }
  .block-avatar {
    background-color: black;
    color: white;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .block-builder {
    font-weight: 600;
  }

  a {
    transition: 0.3s all;
  }
  a:hover {
    color: orange;
  }
  @media (max-width: 800px) {
    .block-url {
      display: none;
    }
  }

  .block-builder,
  .block-stackers {
    width: 50%;
  }

  .block-actions {
    display: flex;
    justify-content: flex-end;
  }
  .block-action {
    padding: 8px;
    margin: 0 4px;
    cursor: pointer;
    transition: 0.3s all;
  }
  .block-action svg {
    font-size: 20px;
    color: #637381;
  }
  .block-action:hover {
    background: rgb(240, 240, 240);
    border-radius: 4px;
    svg {
      color: #262626;
    }
  }
`;

// BlockListItem styles
const BlockListItemWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 77px;
  border-bottom: 1px solid rgb(240, 240, 240);

  &:hover {
    background: rgb(250, 250, 250);
  }
`;
