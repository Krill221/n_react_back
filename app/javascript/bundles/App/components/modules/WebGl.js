import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";


export default class WebGl extends React.Component {

  constructor(props) {
      super(props);
      this.unityContent = new UnityContent(
          "/assets/draft/webBuild.json",
          "/assets/draft/UnityLoader.js"
      );
      this.state ={
        itemsCount: 0,
        items: [],
        saved: false
      }
      this.unityContent.on("onGetFieldItemsCount", count => {
        this.setState({itemsCount: count, items: []});
        for(var i=0;i<count;i++){
          this.unityContent.send("Canvas", "GetItemFromField", i);
        }
      });
      this.unityContent.on("onGetItemFromField", item => {
        this.setState( (prevState) => {
          items: prevState.items.push(item)
        });
        var arr = item.split('|');
      });
  }


  Save = () => {
    this.unityContent.send("Canvas", "GetFieldItemsCount");
    this.setState({saved: true});
  }

  Load = () => {
    this.unityContent.send("Canvas", "ClearField");
    for(var i=0;i<this.state.items.length;i++) {
      this.unityContent.send("Canvas", "AddItemToField", this.state.items[i]);
    }
    this.setState({saved: false});
  }

  Inits = () => {
    this.unityContent.send("Canvas", "AddItemToStorage", "Item1|5");
    this.unityContent.send("Canvas", "AddItemToStorage", "Item2|20");
    this.unityContent.send("Canvas", "PlaceItems", 1);
  }


  render() {
    return <div>
        <Unity unityContent={this.unityContent} />
        <button className="btn" onClick={ () => this.Inits() }>Init Store</button>
        <button className="btn" onClick={ () => this.Save() }  disabled={this.state.saved}>Save</button>
        <button className="btn" onClick={ () => this.Load() }  disabled={!this.state.saved}>Load</button>
      </div>;
  }
}
