import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
import './team.css';

const TeamCard = () => {
  return (
    <div className={'team-container'} id={'team-id'}>
      <h1 className={'team-title'}>Product Development Team</h1>
      <CardDeck className={'deck-container'}>
        <Card className={'card-container'}>
          <CardImg className={'card-img'} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle className={'card-name'}>Elliot Oliveira</CardTitle>
            <CardSubtitle className={'card-subtitle'}>Project Manager, Lead Engineer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.</CardText>
            <a href={'https://github.com/BriantOliveira'} className={'card-links'}>github</a>
          </CardBody>
        </Card>
        <Card className={'card-container'}>
          <CardImg className={'card-img'} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle className={'card-name'}>Sam Galizia</CardTitle>
            <CardSubtitle className={'card-subtitle'}>Lead Backend Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/sgalizia'} className={'card-links'}>github</a>
          </CardBody>
        </Card>
        <Card className={'card-container'}>
          <CardImg className={'card-img'} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle className={'card-name'}>Tony Cioara</CardTitle>
            <CardSubtitle className={'card-subtitle'}>Lead iOS Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/TonyCioara'}>github</a>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck className={'deck-container'}>
        <Card className={'card-container'}>
          <CardImg className={'card-img'} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle className={'card-name'}>Erik Perez</CardTitle>
            <CardSubtitle className={'card-subtitle'}>iOS Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/ErikPerez312'}>github</a>
          </CardBody>
        </Card>
        <Card className={'card-container'}>
          <CardImg className={'card-img'} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle className={'card-name'}>Phyllis Wong</CardTitle>
            <CardSubtitle className={'card-subtitle'}>Lead Frontend Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/PhyllisWong'}>github</a>
          </CardBody>
        </Card>
        <Card className={'card-container'}>
          <CardImg className={'card-img'} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle className={'card-name'}>Johnathan Chen</CardTitle>
            <CardSubtitle className={'card-subtitle'}>Frontend Developer</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</CardText>
            <a href={'https://github.com/johnathanachen'} className={'card-links'}>github</a>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};


export default TeamCard;


