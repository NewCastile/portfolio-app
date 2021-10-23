import styled from 'styled-components';
import Microlink from "@microlink/react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si'
import './App.css';

const projects = [
  { title: "Mern Stack App", url: "https://github.com/NewCastile/mern-stack-app"},
  { title: "React List App", url: "https://github.com/NewCastile/react-list-app"},
  { title: "List App", url: "https://github.com/NewCastile/todo-app"},
  { title: "Tic-Tac-Toe", url: "https://github.com/NewCastile/Tic-Tac-Toe"},
  { title: "Library App", url: "https://github.com/NewCastile/library-app"},
]

const Box = styled.div`
  padding-bottom: 1em;
  display: flex;
  background-color: ${props => props.bgColor || "white"};
  flex-direction: ${props => props.direction || "column"};
  justify-content ${props => props.mainAxis || "center"};
  align-items: ${props => props.crossAxis || "center"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
`

const Project = ({ title, url, ...props }) => (
  <Box mainAxis="space-around">
    <p style={{fontSize: "1.5em", fontWeight: "bold", padding: 0}} >
      { title }
    </p>
    <Box >
      <Microlink url={url} {...props} />
    </Box>
  </Box>
);


function App() {
  return (
    <div className="App">
      <div className="container" style={{
        width: "75%", 
        margin: 0, 
        marginRight: "auto",
        marginLeft: "auto",
      }}>
      <Box>
        <div style={{ width: "55vw", margin: 0, marginLeft: "auto", marginRight: "auto"}}>
          <Box >
                <p style={{padding: 0, margin: 0, fontSize: "3rem", fontWeight: "bold" }}>Hello, I'm Carlos</p>
                <p style={{padding: 0, margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Front-end Developer</p>
                <p style={{padding: 0, margin: 0, fontSize: "1.2em", fontWeight: "bold" }}>Currently diving into React</p>
          </Box>
        </div>
        <div>
          <p style={{fontSize: "1.5em", fontWeight: "bold"}}>Technologies</p>
        </div>
        <Box>
          <div className="technologies" style={{textAlign: "center"}}>
            <FaHtml5 size="3em" ></FaHtml5>
            <FaCss3Alt size="3em"></FaCss3Alt>
            <FaJs size="3em"></FaJs>
            <FaNodeJs size="3em"></FaNodeJs>
            <SiExpress size="3em"></SiExpress>
            <SiMongodb size="3em"></SiMongodb>
            <FaReact size="3em"></FaReact>
          </div>
        </Box>
      </Box>
      <br />
      <Box>
        <p style={{fontSize: "1.5em", fontWeight: "bold", margin: 0, padding: 0}}>Projects</p>
        { projects.map(project => {
          return (
            <Box direction="row" mainAxis="space-around" >
              <Project title={ project.title } url={ project.url } size="large"></Project>
            </Box>
          )
        }) }
      </Box>
      </div>
    </div>
  );
}

export default App;
