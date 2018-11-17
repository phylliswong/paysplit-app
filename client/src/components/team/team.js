import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import './team.css'
import Navbar from '../navbar/navbar.js'

const TeamCard = () => {
  return (
    <div className={'react-transition rotate-in'} id={'team-id'}>
      <Navbar />
      <h1 className="md-padding-top">Product Development Team</h1>

      <CardDeck className={'deck-container'}>

        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Elliot Oliveira</CardTitle>
            <CardSubtitle>Project Manager, Lead Engineer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.</CardText>
            <a href={'https://github.com/BriantOliveira'}>github</a>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Sam Galizia</CardTitle>
            <CardSubtitle>Lead Backend Developer</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <a href={'https://github.com/sgalizia'}>github</a>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Tony Cioara</CardTitle>
            <CardSubtitle>Lead iOS Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/TonyCioara'}>github</a>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck className={'deck-container'}>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Erik Perez</CardTitle>
            <CardSubtitle>iOS Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/ErikPerez312'}>github</a>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Phyllis Wong</CardTitle>
            <CardSubtitle>Lead Frontend Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/PhyllisWong'}>github</a>
          </CardBody>
        </Card>


        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Joe Rezendes</CardTitle>
            <CardSubtitle>Front End Developer</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <a href={'https://github.com/joerez'}>github</a>
          </CardBody>
        </Card>


        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Johnathan Chen</CardTitle>
            <CardSubtitle>Frontend Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/johnathanachen'}>github</a>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};


export default TeamCard;
