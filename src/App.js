import React, {Component} from "react";
import './App.css';
import Particulars from './components/Particulars';
import uniqid from "uniqid"
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      title: "",
      phone: "",
      email: "",
      location: "",
      description: "",
      workExperience: [],
      education: [],
      id:uniqid()

  }
  }

  handleChange = (e) =>{
      const value = e.target.value;
      this.setState({
        ...this.state,
        [e.target.name]:value
      })
  
  }

  

  onSubmit = (e) =>{
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      particulars: this.state.particulars.concat(this.state.firstName),
      id: uniqid()
    })
  }

  addFirstName = (e) => {
    e.preventDefault();
    return (
      <div>{this.state.firstName}</div>
    )
  };

  render(){
    const particulars = this.state.particulars;
    return (
      <div className="App">
        <div class = "cv-form">
          <form id = "personalDetails" >
            <h2>Personal Details</h2>
            <label htmlFor="nameInput"></label>
            <input type = "text" id="nameInput" value={this.state.name} onChange = {this.handleChange} name="name"/>
            <label htmlFor="title"></label>
            <input type = "text" id="title"  value={this.state.title} onChange = {this.handleChange}/>
            <label htmlFor="phone"></label>
            <input type = "text" id="phone" name="phone"  value={this.state.phone} onChange = {this.handleChange}/>
            <label htmlFor="email"></label>
            <input type = "text" id="email" name="email" value={this.state.email} onChange = {this.handleChange}/>
            <label htmlFor="location"></label>
            <input type = "text" id="location" name="location" value={this.state.location} onChange = {this.handleChange}/>
            <textarea name = "description" defaultValue ="This is a description" rows = "5" value={this.state.description} onChange = {this.handleChange}></textarea>
            <div className = "buttonClass">
              <button type = "button">Delete</button> 
              <button type = "button">Add</button>
            </div>
          </form>

          <form id = "workExperience">
            <h2>Work Experience</h2>
            <label htmlFor ="companyName"></label>
            <input type = "text" id ="companyName"/>
            <label htmlFor ="jobTitle"></label>
            <input type = "text" id ="jobTitle"/>
            <label htmlFor ="jobStartDate"></label>
            <input type = "text" id ="jobStartDate"/>
            <label htmlFor ="jobEndDate"></label>
            <input type = "text" id ="jobEndDate"/>
            <label htmlFor ="jobDescription"></label>
            <input type = "text" id ="jobDescription"/>
            <div className = "buttonClass">
              <button type = "button">Delete</button> 
              <button type = "button">Add</button>
            </div>
          </form>
          
          <form id = "education">
            <h2>Education</h2>
            <label htmlFor ="educationName"></label>
            <input type = "text" id ="educationName"/>
            <label htmlFor ="institution"></label>
            <input type = "text" id ="institution"/>
            <label htmlFor ="startDate"></label>
            <input type = "text" id ="startDate"/>
            <label htmlFor ="endDate"></label>
            <input type = "text" id ="endDate"/>
            <div className = "buttonClass">
              <button type = "button">Delete</button> 
              <button type = "button">Add</button>
            </div>
          </form>
        </div>
     

        <div className = "cv-view">
            
        </div>

    </div>
    );
  }
  
}

export default App;
