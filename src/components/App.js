import React, { Component } from 'react';
import './App.css';

import { Portfolio } from './portfolio/Portfolio'
import { about } from './../constants/About'
import { skills } from './../constants/Skills'
import { projects } from './../constants/Projects'
import { experiences } from './../constants/Experiences'

export class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: '',
      selectedHeading: '',
      selectedQuote: '',
      about: null,
      skills: null, 
      projects: null,
      experiences: null,
    }
  }

  componentDidMount () {
    this.setState({
      selectedSection: 'about',
      about, skills, projects, experiences,
      selectedHeading: about.heading,
      selectedQuote: about.quote,
    })
  }

  handleSectionClick = (sectionName) => {
    this.setState({
      selectedSection: sectionName,
      selectedHeading: this.state[sectionName].heading,
      selectedQuote: this.state[sectionName].quote,
    })
  }

  render() {
    return (
      <div className = 'App'>
        <Portfolio
          about = {this.state.about}
          skills = {this.state.skills}
          projects = {this.state.projects}
          experiences = {this.state.experiences}
          selectedHeading = {this.state.selectedHeading}
          selectedQuote = {this.state.selectedQuote}
          selectedSection = {this.state.selectedSection}
          handleSectionClick = {this.handleSectionClick} />
      </div>
    )
  }
}

export default App;
