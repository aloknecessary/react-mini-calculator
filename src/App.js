import React, {Component} from 'react';
import './App.css';

class Calculator extends Component {

  state = { 
    num1: '',
    num2: '',
    result: ''
  }
  constructor(){
     super();
     this.handleAdd = this.handleAdd.bind(this);
     this.handleSubtract = this.handleSubtract.bind(this);
     this.handleMultiply = this.handleMultiply.bind(this);
     this.handleDivide = this.handleDivide.bind(this);
     this.reset = this.reset.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.validateInput = this.validateInput.bind(this);
  }
 
  render () {
   return (
     <div className="container">
      <div className="row margin-top-10">
        <div className="col-4 offset-sm-4 alert alert-warning" >
          Basic Calculator
        </div>
        <div className="col-4 offset-sm-4 calc-body">
          <div className="row">
            <div className="col-sm-12">
            <label htmlFor="output">Result:</label>
              <input className="form-control disabled-bg" name="output" value={this.state.result} readOnly="readOnly"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="num1">Number 1:</label>
              <input className="form-control" type="number" name="num1" value={this.state.num1} onChange={(e) => this.handleInputChange(e)}/>
            </div>
            <div className="col-sm-6">
              <label htmlFor="num2">Number 2:</label>
              <input className="form-control" type="number" name="num2"  value={this.state.num2} onChange={(e) => this.handleInputChange(e)}/>
            </div>
          </div>
          <div className="row margin-top-10">
            <div className="col-sm-3">
              {/* Add btn */}
              <button className="btn btn-block btn-secondary" onClick={this.handleAdd}>&#43;</button> 
            </div>
            <div className="col-sm-3">
              {/* Subtract btn */}
              <button className="btn btn-block btn-secondary" onClick={this.handleSubtract}>&#8722;</button>
            </div>
            <div className="col-sm-3">
              {/* Multiply btn */}
              <button className="btn btn-block btn-secondary" onClick={this.handleMultiply}>&#215;</button>
            </div>
            <div className="col-sm-3">
              {/* Divide btn */}
              <button className="btn btn-block btn-secondary" onClick={this.handleDivide}>&#247;</button>
            </div>
          </div>
          <div className="row margin-top-10">
            <div className="col-sm-12">
              {/* Add btn */}
              <button className="btn btn-block btn-outline-warning btn-sm" onClick={this.reset}>Reset</button> 
            </div>
          </div>
        </div>
      </div>
     </div>
   )
  }

  handleDivide = () => {
    if(this.validateInput()){
      if(parseFloat(this.state.num2) !== 0.0){
        this.setState({
          result: parseFloat(this.state.num1) / parseFloat(this.state.num2)
        })
      }else{
        this.setState({
          result: 'Cannot divide by Zero'
        })
      }
    }
  }

  handleMultiply = () => {
    if(this.validateInput()){
      this.setState({
        result: parseFloat(this.state.num1) * parseFloat(this.state.num2)
      })
    }
    
  }

  handleSubtract = () => {
    if(this.validateInput()){
      this.setState({
        result: parseFloat(this.state.num1) - parseFloat(this.state.num2)
      })
    }
  }

  handleAdd = () => {
    if(this.validateInput()){
      this.setState({
        result: parseFloat(this.state.num1) + parseFloat(this.state.num2)
      });
    }
  }

  reset = () => {
    this.setState({
      result: '', num1: '', num2: ''
    })
  }

  handleInputChange = (element) =>{
    this.setState({
      [element.target.name] : element.target.value
    })
  }

  validateInput = () => {
    if(this.state.num1 === '' || this.state.num2 === ''){
      this.setState({result: 'Required no of paramters are missing!'});
      return false
    }
    return true;
  }
}

export default Calculator;

