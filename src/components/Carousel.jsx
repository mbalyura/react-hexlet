import React from 'react';
import cn from 'classnames';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  onClickPrev = (e) => {
    e.preventDefault();
    const { active } = this.state;
    const newIndex = active === 0 ? 2 : active - 1;
    this.setState({ active: newIndex });
  };

  onClickNext = (e) => {
    e.preventDefault();
    const { active } = this.state;
    const newIndex = active === 2 ? 0 : active + 1;
    this.setState({ active: newIndex });
  };

  renderCarousel() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel-inner">
        {images.map((url, i) => {
          const classes = cn({
            'carousel-item': true,
            active: active === i,
          });
          return (
            <div key={url} className={classes}>
              <img alt="" className="d-block w-100" src={url} />
            </div>
          )
        })}
      </div>
    );
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        {this.renderCarousel()}
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev" onClick={this.onClickPrev}>
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next" onClick={this.onClickNext}>
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
