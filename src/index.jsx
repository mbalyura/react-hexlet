import React from 'react';
import ReactDOM from 'react-dom';

// import Card from './components/Card';
// import Card2 from './components/Card2';
// import Definitions from './components/Definitions';
// import Progress from './components/Progress';
// import Alert from './components/Alert';
// import ListGroup from './components/ListGroup';
// import BtnGroup from './BtnGroup';
// import Carousel from './components/Carousel';
// import Collapse from './components/Collapse';
import MyForm from './components/MyForm';

// ReactDOM.render(<Card />, document.getElementById('card'));

// ReactDOM.render(
//   <Card2 title="title from props" text="text from props" />, 
//   document.getElementById('card2')
// );

// const definitions = [
//   { dt: 'one', dd: 'two' },
//   { dt: 'another term', dd: 'another description' },
// ];

// ReactDOM.render(
//   <Definitions data={definitions} />,
//   document.getElementById('definitions'),
// );

// ReactDOM.render(
//   <Progress percentage={40} />,
//   document.getElementById('progress'),
// );

// ReactDOM.render(
//   <Alert type="danger" text="what is love?" />,
//   document.getElementById('alert'),
// );

// const dom = (
//   <ListGroup>
//     <p>one</p>
//     <p>two</p>
//     <p>three</p>
//   </ListGroup>
// );

// ReactDOM.render(
//   dom,
//   document.getElementById('list'),
// );

// ReactDOM.render(
//   <BtnGroup />,
//   document.getElementById('btngroup'),
// );

// const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];

// ReactDOM.render(
//   <Carousel images={images} />,
//   document.getElementById('carousel'),
// );

// const text = 'collapse me';

// ReactDOM.render(
//   <Collapse text={text} />,
//   document.getElementById('collapse'),
// );

ReactDOM.render(
  <MyForm />,
  document.getElementById('myform'),
);