import React from 'react';
import Researcherimg from './img/Researcher.png';
import Cover from './img/cover.png';

let input_val = '';


export default class Researcher extends React.Component {

  constructor(props) {
    super(props);

    this.state = { term : ''};
  }
    render() {
      // console.log(this.state);
      input_val = this.state.term;
      return (
          <div>
            <img src= {Researcherimg} alt="Researcher" style={styles.container}/>
            <input
              value = {this.state.term}
              style={styles.input_bar}
              fontSize = {25}
              onChange = {(event) => this.onInputChange(event.target.value)}/>
            <img src={Cover} alt="cover" style={styles.cover} onClick={this.submit}/>
          </div>
      )
    }

  onInputChange(term) {
    this.setState({term});
  }

  submit() {
    console.log(input_val);
  }
}

const styles = {
    container: {
      width:1430,
      // 设置高度
      height:1000,

      resizeMode:'cover'
    },

    input_bar: {
      position: 'absolute',
      width:440,
      height:70,
      top:205,
      left:600,
      fontSize:"30px"
    },

    cover: {
      position: 'absolute',

      top: 205,

      left:1045,
      // 设置背景颜色
      backgroundColor:'green',
      // 设置宽度
      width:120,
      // 设置高度
      height:75,
      //opacity
      opacity:0
    }
  }
