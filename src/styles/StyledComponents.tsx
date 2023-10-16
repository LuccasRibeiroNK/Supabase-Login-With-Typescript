import styled from "styled-components";

const mediaQuery = {
  small: "320px",
  medium: "1024px",
  large: "1920px",
};

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  margin-left: -8px;
  width: 120vw;
  background-color: rgb(239 68 68);
  text-decoration: none;

  .header {
    .ulHeader {
      li {
        margin-right: 1vw;
        @media (min-width: ${mediaQuery.small}) {
          font-size: 0.5rem;
          margin-left: 1vw;
        }
        @media (min-width: ${mediaQuery.medium}) {
          font-size: 1rem;
          margin-left: 2vw;
        }
        @media (min-width: ${mediaQuery.large}) {
          font-size: 1rem;
          padding-right: 13px;
          margin-top: -0.7rem;
        }
      }
      max-width: 90vw;
      justify-content: center;
      list-style: none;
      display: flex;
      align-items: center;
      margin: 0;
      .liPoster {
        margin-right: 17vw;
        @media (min-width: ${mediaQuery.small}) {
          margin-right: 10vw;
          margin-left: -5vw;
        }
      }
      button {
        background-color: #fbbf24;
        color: #b91c1c;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: none;
        cursor: pointer;
        margin-top: 0.6rem;
        transition: 0.3s;
        &:hover {
          background-color: #f59e0b;
        }
        @media (max-width: ${mediaQuery.small}) {
          padding: 0.5rem 0.5rem;
          margin-left: 0.5rem;
          margin-top: -0.1rem;
          font-size: 0.5rem;
        }
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-top: 15px;
      margin-right: -7px;
      @media (max-width: ${mediaQuery.small}) {
        display: none;
      }
    }
  }
`;

export const StyledLogin = styled.button`
  background-color: #e3e3e3;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh auto;
  border-radius: 1rem;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
`;

export const StyledHome = styled.div`
  h1 {
    font-size: 3rem;
    color: black;
    text-align: center;

    @media (min-width: ${mediaQuery.small}) {
      margin-top: -0.5rem;
      font-size: 1.1rem;
    }
    @media (min-width: ${mediaQuery.medium}) {
        margin-top: 2.5rem;
      font-size: 2rem;
    }
    @media (min-width: ${mediaQuery.large}) {
        margin-top: 3rem;
      font-size: 3rem;
    }
  }
  background-color: #eeeeee;
  color: black;
  .container {
    margin-top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 180vw;
    .compilationGrid {
      display: flex;
      margin: auto 30vw;
      display: grid;
      grid-gap: 1rem;
      
      @media (min-width: ${mediaQuery.small}) {
        grid-template-columns: repeat(1, 1fr);
        .postsWindows {
            width: calc(80% - 0.1rem); 
            margin-left: 1rem;
          }
      }  
      @media (min-width: ${mediaQuery.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${mediaQuery.large}) {
        grid-template-columns: repeat(3, 1fr);
          .postsWindows {
              width: calc(90% - 0.1rem); 
            }
    }
  }
   
      .postsWindows {
        border: 1px solid black;
        padding: 1rem;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #ddd9d9;
        }
        .textTime {
          font-size: 0.8rem;
          font-weight: normal;
          color: gray;
          font-style: italic;
        }
        .textCreated {
          font-size: 0.8rem;
          font-weight: normal;
          color: gray;
          font-style: italic;
        }
        h2 {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
          font-weight: bold;
          @media (max-width: ${mediaQuery.small}) {
            font-size: 1.3rem;
            margin-top: -0.3rem;
          }
        }
        .imgPost {
        width: 30vw;
        height: 50vh;
        object-fit: scale-down;
        @media (max-width: ${mediaQuery.small}) {
          width: 90vw;
          object-fit: scale-down;
          margin-left: -1rem;
   
        }
        }
        .imgAvatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .text {
          font-size: 1rem;
          font-weight: normal;
        }
        .textDate {
          font-size: 0.5rem;
          font-weight: normal;
        }
        .textAuthor {
          font-size: 0.5rem;
          font-weight: normal;
        }
        li {
          list-style: none;
        }
        button {
          margin-left: -3rem;
          background-color: red;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background-color: red;
          }
        }
      }
    }
  }
  }
`;

export const StyledUserPage = styled.div`
h1 {
    font-size: 3rem;
    color: black;
    text-align: center;

    @media (min-width: ${mediaQuery.small}) {
      margin-top: -0.5rem;
      font-size: 1.1rem;
    }
    @media (min-width: ${mediaQuery.medium}) {
        margin-top: 2.5rem;
      font-size: 2rem;
    }
    @media (min-width: ${mediaQuery.large}) {
        margin-top: 3rem;
      font-size: 3rem;
    }
  }
  background-color: #eeeeee;
  color: black;
  .container {
    margin-top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 180vw;
    .compilationGrid {
      display: flex;
      margin: auto 30vw;
      display: grid;
      grid-gap: 1rem;
      
      @media (min-width: ${mediaQuery.small}) {
        grid-template-columns: repeat(1, 1fr);
        .postsWindows {
            width: calc(80% - 0.1rem); 
            margin-left: 1rem;
          }
      }  
      @media (min-width: ${mediaQuery.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${mediaQuery.large}) {
        grid-template-columns: repeat(3, 1fr);
          .postsWindows {
              width: calc(90% - 0.1rem); 
            }
    }
  }
   
      .postsWindows {
        border: 1px solid black;
        padding: 1rem;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #ddd9d9;
        }
        .textTime {
          font-size: 0.8rem;
          font-weight: normal;
          color: gray;
          font-style: italic;
        }
        .textCreated {
          font-size: 0.8rem;
          font-weight: normal;
          color: gray;
          font-style: italic;
        }
        h2 {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
          font-weight: bold;
          @media (max-width: ${mediaQuery.small}) {
            font-size: 1.3rem;
            margin-top: -0.3rem;
          }
        }
        .imgPost {
        width: 30vw;
        height: 50vh;
        object-fit: scale-down;
        @media (max-width: ${mediaQuery.small}) {
          width: 90vw;
          object-fit: scale-down;
          margin-left: -1rem;
   
        }
        }
        .imgAvatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .text {
          font-size: 1rem;
          font-weight: normal;
        }
        .textDate {
          font-size: 0.5rem;
          font-weight: normal;
        }
        .textAuthor {
          font-size: 0.5rem;
          font-weight: normal;
        }
        li {
          list-style: none;
        }
        button {
          margin-left: -3rem;
          background-color: red;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background-color: red;
          }
        }
      }
    }
  }
  }
`;

export const StyledCreatePosts = styled.div`
  .container {
    width: 800px;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    @media (max-width: ${mediaQuery.small}) {
      width: 100vw;
      margin: 40px auto;
    }
    martgin-top: 100px;
    .subContainer {
      padding: 1rem;
      border: 1px solid black;
      max-width: 70%;
      border-radius: 1rem;
      border-color: gray;
      background-color: #e3e3e3;
      margin-bottom: 1rem;
      max-width: 500px;
      width: 60vw;
    }
    h1 {
      color: black;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      max-width: 500px;
      width: 60vw;
      @media (max-width: ${mediaQuery.small}) {
        font-size: 1rem;
        margin-top: -0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    .inputs {
      margin-bottom: 1rem;
      max-width: 500px;
      width: 60vw;
    }
    .inputText {
      margin-bottom: 1rem;
      max-width: 500px;
      width: 60vw;
      height: 60vh;
      @media (max-width: ${mediaQuery.small}) {
        height: 30vh;
      }
    }
    p {
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: gray;
    }
    button {
      background-color: #fbbf24;
      &:hover {
        background-color: #f59e0b;
      }
      font-weight: bold;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 0.25rem;
      margin-top: 1.5rem;
    }
  }
`;

export const StyledNotLogged = styled.div`
  .notLogged {
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    color: black;
  }
`;
