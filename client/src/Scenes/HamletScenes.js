import { HashLink } from "react-router-hash-link";

function HamletScenes() {
  return (
<div className="list-container">
            <div style={{height:"100%"}}></div>
              <div className="list-heading">Act 1</div>
                <ul>
                    <li><HashLink className="link" smooth to="/hamlet#1_1">Scene 1</HashLink></li>
                    <li><HashLink  className="link" smooth to="/hamlet#1_2"> Scene 2</HashLink></li>
                    <li><HashLink  className="link" smooth to="/hamlet#1_3">Scene 3</HashLink></li>
                    <li><HashLink className="link" smooth to="/hamlet#1_4">Scene 4</HashLink></li>
                    <li><HashLink className="link" smooth to="/hamlet#1_5">Scene 5</HashLink></li>
                </ul>
                <div className="list-heading">Act 2</div>
                <ul>
                    <li><HashLink className="link" smooth to="/hamlet#2_1">Scene 1</HashLink></li>
                    <li><HashLink className="link"smooth to="/hamlet#2_2">Scene 2</HashLink></li>
                </ul>
                <div  className="list-heading">Act 3</div>
                    <ul>
                        <li><HashLink className="link"smooth to="/hamlet#3_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#3_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#3_3">Scene 3</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#3_4">Scene 4</HashLink></li>

                    </ul>
                <div className="list-heading">Act 4</div>
                    <ul>
                        <li><HashLink className="link"smooth to="/hamlet#4_1">Scene 1</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#4_2">Scene 2</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#4_3">Scene 3</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#4_4">Scene 4</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#4_5">Scene 5</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#4_6">Scene 6</HashLink></li>
                        <li><HashLink className="link"smooth to="/hamlet#4_7">Scene 7</HashLink></li>
                    </ul>
                    <div className="list-heading">Act 5</div>
                    <ul>
                        <li><HashLink className="link" smooth to="/hamlet#5_1">Scene 1</HashLink></li>
                        <li><HashLink className="link" smooth to="/hamlet#5_2">Scene 2</HashLink></li>

                    </ul>
            </div>
  )}
export default HamletScenes;