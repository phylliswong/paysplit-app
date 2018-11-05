import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import './team.css'

const TeamCard = (props) => {
  return (
    <div className={'team-container'}>
      <CardDeck className={'deck-container'}>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Elliot Oliveira</CardTitle>
            <CardSubtitle>Project Manager, Lead Backend</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Sam Galizia</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Tony Ciora</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck className={'deck-container'}>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Erik Perez</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Phyllis Wong</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Johnathan Chen</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

function Elliot() {
  return <h1>Elliot Oliveira</h1>;
}
function Erik() {
  return <h1>Erik Perez</h1>
}
function Tony() {
  return <h1>Tony Ciora</h1>
}
function Sam() {
  return <h1>Sam Galizia</h1>
}
function Phyllis() {
  return <h1>Phyllis Wong</h1>
}

export default TeamCard;


