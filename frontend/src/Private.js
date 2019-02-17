import React from 'react';
import Privateimg from './img/Private.png';


let prediction = '大佬';
class Private extends React.Component {

    render() {
        return (
            <div>
              <img src={Privateimg} alt="Private" style={styles.container}/>
              <a style={styles.prediction}>{prediction}</a>
            </div>
        )
    }
}

const styles = {
    container: {
      width:1430,
      // 设置高度
      height:1000,

      resizeMode:'cover'
    },

    prediction: {
      position: 'absolute',
      top:275,
      left:800,
      color: "#a50303",
      fontSize: "50px"
    }
}

export default Private;
