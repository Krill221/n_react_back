import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";


export default class WebGl extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "/assets/webBuild.json",
      "/assets/UnityLoader.js"
    );
  }

  render() {
    return <Unity unityContent={this.unityContent} />;
  }
}
