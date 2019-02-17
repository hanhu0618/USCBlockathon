import React, { Component } from 'react';
import Homeimg from './img/Home.png';
import Cover_left from './img/cover.png';
import Cover_right from './img/cover.png';

class Home extends Component {
  toInvestor() {
    window.location.href = "#/investor";
  }
  toResearcher() {
    window.location.href = "#/researcher";
  }
  render() {
    return (
      <div>
        <img src={Homeimg} alt="home" style={styles.container}  />
        <img src={Cover_left} alt = "cover_left" style={styles.cover_left} onClick={this.toInvestor}/>
        <img src={Cover_right} alt = "cover_right" style={styles.cover_right} onClick={this.toResearcher}/>
      </div>
    );
  }
}



const styles = {
    container: {
      resizeMode:'cover'
    },
    cover_left: {
      position: 'absolute',

      top: 500,

      left:300,
      // 设置背景颜色
      backgroundColor:'green',
      // 设置宽度
      width:300,
      // 设置高度
      height:475,
      //opacity
      opacity:0
    },

    cover_right: {
      position: 'absolute',

      top: 500,

      left:850,
      // 设置背景颜色
      backgroundColor:'green',
      // 设置宽度
      width:350,
      // 设置高度
      height:475,
      //opacity
      opacity:0
    }
  }

export default Home;
