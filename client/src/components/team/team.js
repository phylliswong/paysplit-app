import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import './team.css'

const TeamCard = () => {
  return (
    <div className={'react-transition swipe-right'} id={'team-id'}>
      <h1 className="md-padding">Product Development Team</h1>

      <CardDeck className={'deck-container'}>

        <Card>
          <CardImg top width="100%" className={'elliot-img'} />
          <CardBody>
            <CardTitle>Elliot Oliveira</CardTitle>
            <CardSubtitle>Project Manager / Lead Engineer</CardSubtitle>
            <CardText>
              Elliot Briant is currently based in San Francisco, CA. Elliot is a creative and ambitious software developer.
              He also approaches any environment as an opportunity to utilize his experience with a variety of computer
              languages and software architecture.
            </CardText>
            <a href={'https://github.com/BriantOliveira'}>github</a>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" className={'sam-img'} />
          <CardBody>
            <CardTitle>Sam Galizia</CardTitle>
            <CardSubtitle>Lead Backend Developer</CardSubtitle>
            <CardText>
              Sam is a passionate Backend Web Developer & Dev Ops enthusiast. You can probably find him attempting
              to automate everything he can in his workflow. Or he is playing video games...50/50 chance of either.
            </CardText>
            <a href={'https://github.com/sgalizia'}>github</a>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" className={'tony-img'} />
          <CardBody>
            <CardTitle>Tony Cioara</CardTitle>
            <CardSubtitle>Lead iOS Developer</CardSubtitle>
            <CardText>
              Tony is a full stack developer based in San Francisco, CA. He has multiple projects under his belt,
              ranging from APIs to iOS apps and games. He has a love for challenging programming problems, as well as
              outdoor activities.
            </CardText>
            <a href={'https://github.com/TonyCioara'}>github</a>
          </CardBody>
        </Card>
      </CardDeck>

      <CardDeck className={'deck-container'}>
        <Card>
          <CardImg top width="100%" className={'no-img-img'} />
          <CardBody>
            <CardTitle>Erik Perez</CardTitle>
            <CardSubtitle>iOS Developer</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </CardText>
            <a href={'https://github.com/ErikPerez312'}>github</a>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" className={'phyllis-img'} />
          <CardBody>
            <CardTitle>Phyllis Wong</CardTitle>
            <CardSubtitle>Lead Frontend Developer</CardSubtitle>
            <CardText>
              Phyllis Wong is a San Francisco based frontend developer. She loves creating applications that are useful,
              beautiful, and easy to use. Her passions are EdTech, Urban Planning, start-ups, and snow boarding. One day she
              hopes to work on mobile technology that pushes the boundaries of embedded devices.
            </CardText>
            <a href={'https://github.com/PhyllisWong'}>github</a>
          </CardBody>
        </Card>


        <Card>
          <CardImg top width="100%" className={'joe-img'} />
          <CardBody>
            <CardTitle>Joe Rezendes</CardTitle>
            <CardSubtitle>Frontend Developer</CardSubtitle>
            <CardText>
              Joe Rezendes specializes in developing great user experiences. He has a passion for adding eccentric touches
              to the web. In 2016, Joe started teaching 4th and 5th graders basic front end development skills, and in
              the past few years he's shipped out over 15 products, and worked on many teams as a front end developer.
              In his spare time he enjoys playing Trombone in a San Francisco based Ska band.
            </CardText>
            <a href={'https://github.com/joerez'}>github</a>
          </CardBody>
        </Card>
      </CardDeck>

      <CardDeck className={'deck-container'}>
        <Card>
          <CardImg top width="100%" className={'no-img-img'} />
          <CardBody>
            <CardTitle>Johnathan Chen</CardTitle>
            <CardSubtitle>UI/UX Developer</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </CardText>
            <a href={'https://github.com/johnathanachen'}>github</a>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" className={'vincenzo-img'} />
          <CardBody>
            <CardTitle>Vincenzo Marcella</CardTitle>
            <CardSubtitle>iOS Developer</CardSubtitle>
            <CardText>
              Vincenzo Marcella is a Software Engineer currently located in the San Francisco, CA. Programming since
              the age of 15, Vincenzo loves exploring the field of technology and seeking out ways he can combine his
              computer programming abilities and general body of knowledge to create software that solves real world problems.
            </CardText>
            <a href={'https://github.com/C3NZ'}>github</a>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" className={'anisha-img'}/>
          <CardBody>
            <CardTitle>Anisha Jain</CardTitle>
            <CardSubtitle>iOS Developer / Designer</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </CardText>
            <a href={'https://github.com/PhyllisWong'}>github</a>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};


export default TeamCard;
