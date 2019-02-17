import React from 'react';
import Investorimg from './img/Investor.png';
import Cover from './img/cover.png';

class Investor extends React.Component {
    toPrivate() {
      window.location.href = "#/private";
    }
    render() {
        return (
            <div>
              <img src= {Investorimg} alt="home" style={styles.container} />
              <img src= {Cover} alt='cover' style={styles.cover} onClick={this.toPrivate}/>
            </div>
        )
    }
}

const styles = {
    container: {
      width:1450,
      // 设置高度
      height:1000,

      resizeMode:'cover'
    },
    cover: {
      position: 'absolute',

      top: 235,

      left:1330,
      // 设置背景颜色
      backgroundColor:'green',
      // 设置宽度
      width:75,
      // 设置高度
      height:225,
      //opacity
      opacity:0
    }
  }

export default Investor;
