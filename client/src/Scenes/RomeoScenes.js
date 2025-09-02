import "../App.css";
import { HashLink } from "react-router-hash-link";

function RomeoScenes() {
  return (
<div className="list-container">
            <div style={{height:"100%"}}></div>
              <h3 className="list-heading">Act 1</h3>
                <ul>
                    <li><HashLink className="link" smooth to="/merchant-of-venice#1_1">Scene 1</HashLink></li>
                    <li><HashLink  className="link" smooth to="/merchant-of-venice#1_2"> Scene 2</HashLink></li>
                    <li><HashLink  className="link" smooth to="/merchant-of-venice#1_3">Scene 3</HashLink></li>
                    <li><HashLink className="link"smooth to="/merchant-of-venice#1_4">Scene 4</HashLink></li>
                    <li><HashLink className="link" smooth to="/merchant-of-venice#1_5">Scene 5</HashLink></li>
                </ul>
                <h3  className="list-heading">Act 2</h3>
                <ul>
                    <li><HashLink className="link" smooth to="/merchant-of-venice#2_1">Scene 1</HashLink></li>
                    <li><HashLink className="link"smooth to="/merchant-of-venice#2_2">Scene 2</HashLink></li>
                    <li><HashLink className="link"smooth to="/merchant-of-venice#2_3">Scene 3</HashLink></li>
                    <li><HashLink className="link"smooth to="/merchant-of-venice#2_4">Scene 4</HashLink></li>
                    <li><HashLink className="link" smooth to="/merchant-of-venice#2_5">Scene 5</HashLink></li>
                    <li><HashLink className="link" smooth to="/merchant-of-venice#2_6">Scene 6</HashLink></li>
                </ul>
                <h3  className="list-heading">Act 3</h3>
                    <ul>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#3_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#3_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#3_3">Scene 3</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#3_4">Scene 4</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#3_5">Scene 5</HashLink></li>
                    </ul>
                <h3  className="list-heading">Act 4</h3>
                    <ul>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#4_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#4_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#4_3">Scene 3</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#4_4">Scene 4</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#4_5">Scene 5</HashLink></li>
                    </ul>
                    <h3  className="list-heading">Act 5</h3>
                    <ul>
                        <li><HashLink className="link" smooth to="/merchant-of-venice#5_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#5_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/merchant-of-venice#5_3">Scene 3</HashLink></li>
                    </ul>
            </div>
  )}
export default RomeoScenes;