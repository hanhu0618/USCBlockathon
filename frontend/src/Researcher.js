import React from 'react';
import Researcherimg from './img/Researcher.png';
import Cover from './img/cover.png';
import web3 from './web3';
import instance from "./factory";

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

  submit = async(e) => {
    // e.preventDefault();
    console.log('Deploying prediction...');
    console.log('Prediction successfully deployed!');
    this.setState({loading:true, errorMessage: ""});
    try{
        console.log(instance);
        const accounts = await web3.eth.getAccounts();
        await instance.methods.createPrediction(
          1,
          1
        ).call({
          from: accounts[0]
        })
        console.log('Push to contract');
    } catch(err) {
        // console.log(err);
        this.setState({errorMessage:err.message});
    }
    this.setState({loading: false, value:""});
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
