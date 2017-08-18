import ReactDOM from 'react-dom';
import React from 'react';

import CardColumn from './components.jsx';

class Page extends React.Component {
  render() {
    return (
      <div id="app">
        <Sidebar/>
        <Main/>
      </div>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div id="add-card-form">
          <div className="form-title">New Card</div>
          <input id="title-text" type="text" />
          <input id="description-text" type="text" />
          <button className="add-card">+</button>
        </div>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      columns: [
        {
          cards: [
            {
              title: 'Cake Homepage HTML/CSS',
              description: 'Code on Code on Code on Code',
              hasDeleteAction: true,
              hasCompleteAction: true,
              id: 1,
            },
            {
              title: 'Learn React',
              description: 'Take the first Level of React',
              hasDeleteAction: true,
              hasCompleteAction: true,
              id: 2,
            },
            {
              title: 'Plan Two Truths and a Lie',
              description: 'Finish Wireframe, start HTML Layout with some other things...',
              hasDeleteAction: true,
              hasCompleteAction: true,
              id: 3,
            },
          ],
        },
        {
          cards: [
            {
              title: 'Cake Homepage HTML/CSS',
              description: 'Code on Code on Code on Code',
              hasDeleteAction: true,
              hasCompleteAction: true,
              id: 1,
            },
          ],
        },
      ],
    };

  }

  render () {
    return (
      <div id="main">
        <CardColumn cards={this.state.columns[0].cards} />
        <CardColumn cards={this.state.columns[1].cards} />
      </div>
    );
  }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
