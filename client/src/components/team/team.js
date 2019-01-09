import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

import PersonCard from './PersonCard';
import './team.css'

class TeamCard extends Component {
  constructor(props) {
    super(props)
    let transValue = 0;
    let transx = `translateX(${transValue})`

    this.state = {
      transform: {transx},
      transValue: 0
    }

    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  leftArrow() {
    let prev = this.state.transValue
    if (prev != 0) {
      prev = prev + 200;
      this.setState({transValue: prev})
    }
  }

  rightArrow() {
    let prev = this.state.transValue
    if (prev != -1200) {
      prev = prev - 200;
      this.setState({transValue: prev})
    }
  }

  render() {
    return (
      <div className={'react-transition swipe-right team-page'} id={'team-id'}>
        <h1 className="team-heading">Product Development Team</h1>
        <div onClick={() => this.leftArrow()} className="arrow-nav left-arrow">←</div>
        <div onClick={() => this.rightArrow()} className="arrow-nav right-arrow">→</div>

        <div style={{transform: `translateX(${this.state.transValue}px`}} className="team-cards">


          <PersonCard
           imgClass="elliot-img"
           name="Elliot Oliveira"
           subtext="Project Manager / Lead Engineer"
           content="Elliot Briant is currently based in San Francisco, CA. Elliot is a creative and ambitious software developer.
              He also approaches any environment as an opportunity to utilize his experience with a variety of computer
              languages and software architecture."
           url="https://github.com/BriantOliveira"
           />

          <PersonCard
          imgClass="sam-img"
          name="Sam Galizia"
          subtext="Lead Backend Developer"
          content="Sam is a passionate Backend Web Developer & Dev Ops enthusiast. You can probably find him attempting
            to automate everything he can in his workflow. Or he is playing video games...50/50 chance of either."
          url="https://github.com/sgalizia"
          />

          <PersonCard
          imgClass="tony-img"
          name="Tony Cioara"
          subtext="Lead iOS Developer"
          content="Tony is a full stack developer based in San Francisco, CA. He has multiple projects under his belt,
            ranging from APIs to iOS apps and games. He has a love for challenging programming problems, as well as
            outdoor activities."
          url="https://github.com/TonyCioara"
          />

          <PersonCard
          imgClass="no-img-img"
          name="Erik Perez"
          subtext="iOS Developer"
          content="This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action."
          url="https://github.com/ErikPerez312"
          />

          <PersonCard
          imgClass="phyllis-img"
          name="Phyllis Wong"
          subtext="Lead Frontend Developer"
          content="Phyllis Wong is a San Francisco based frontend developer. She loves creating applications that are useful,
            beautiful, and easy to use. Her passions are EdTech, Urban Planning, start-ups, and snow boarding. One day she
            hopes to work on mobile technology that pushes the boundaries of embedded devices."
          url="https://github.com/PhyllisWong"
          />

          <PersonCard
          imgClass="joe-img"
          name="Joe Rezendes"
          subtext="Frontend Developer"
          content="Joe Rezendes specializes in developing great user experiences. He has a passion for adding eccentric touches
            to the web. In 2016, Joe started teaching 4th and 5th graders basic front end development skills, and in
            the past few years he's shipped out over 15 products, and worked on many teams as a front end developer.
            In his spare time he enjoys playing Trombone in a San Francisco based Ska band."
          url="https://github.com/joerez"
          />


          <PersonCard
          imgClass="anisha-img"
          name="Anisha Jain"
          subtext="iOS Developer / Designer"
          content="This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action."
          url="https://github.com/PhyllisWong"
          />
        </div>
      </div>
    );
  }
};


export default TeamCard;
