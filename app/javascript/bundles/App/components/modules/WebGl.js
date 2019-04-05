import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";


export default class WebGl extends React.Component {

  unityContent = new UnityContent(
      "/assets/draft/webBuild.json",
      "/assets/draft/UnityLoader.js"
  );

  fullScreen = () => {
    this.unityContent.send("Canvas", "InitItem", "Item1|5");
    this.unityContent.send("Canvas", "InitItem", "Item2|20");
    this.unityContent.send("Canvas", "PlaceItems", 1);

    //this.unityContent.SetFullscreen(1);
  }

  render() {
    return <div>
        <Unity unityContent={this.unityContent} />
        <button className="btn" onClick={ () => this.fullScreen() }>Full Screen</button>
      </div>;
  }
}
