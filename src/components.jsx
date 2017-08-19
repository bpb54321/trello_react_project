import React from 'react';

export class Page extends React.Component {
  render() {
    return (
      <div id="app">
        <Sidebar/>
        <Main/>
      </div>
    );
  }
}

export class Sidebar extends React.Component {
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

export class Main extends React.Component {
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

export class CardForm extends React.Component {

  render() {
    return (
      <div></div>
    );
  }
}

/* Define Card Component Here*/
export class Card extends React.Component {
  render() {

    let deleteButton = '';
    let completeButton = '';

    if (this.props.hasDeleteAction) {
      deleteButton = <button className="delete-card">X</button>
    }

    if (this.props.hasCompleteAction) {
      completeButton = <button className="complete-card">></button>;
    }

    return (
      <li className="card">
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
        <div className="actions">
          {deleteButton}
          {completeButton}
        </div>
      </li>
    );
  }
}

/* Column Component */
export class CardColumn extends React.Component {

    constructor() {
      super();
    }

    render() {
        return (
          <div id="up-next" className="card-column">
            <div className="card-column-title">Up Next</div>
            <ul className="card-list">
              {
                this.props.cards.map( (card) => {
                    return (<Card
                              title={card.title}
                              description={card.description}
                              hasDeleteAction={card.hasDeleteAction}
                              hasCompleteAction={card.hasCompleteAction}
                              key={card.id}
                            />);
                })
              }
            </ul>
          </div>
        );
    }
}

// I want each Card Column to display an array of cards.
// To do this, I should create a state array in CardColumn which contains an array of Card objects.
