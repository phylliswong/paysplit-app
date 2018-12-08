import React, { Component } from 'react'

import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from 'reactstrap';

import './info.css';
import friends from './friends.jpg';
import dining from './dining.jpg';
import billSplit from './bill-split.png';
import cash from './cash.jpg';

const items = [
	{
		src: friends,
    altText: 'Eat dinner out with friends',
		caption: 'Eat dinner out with friends'
	},
	{
		src: dining,
		altText: 'Enjoy your life',
		caption: 'Enjoy your life'
	},
	{
		src: billSplit,
		altText: 'Too many credit cards is a mess',
		caption: 'Too many credit cards is a mess'
	},
	{
		src: cash,
		altText: 'Who pays with cash anymore',
		caption: 'Who pays with cash anymore'
	}
];

class Info extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
    let style = {}
    style.width = '70%';
    style.height = '70%';
    style.margin = '2rem';

		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} style={style}/>
					<CarouselCaption captionHeader={item.caption} className='caption'/>
				</CarouselItem>
			);
		});

		return (
      <div className={'carousel-slide'} id={'info'}>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
		);
	}
}

export default Info
