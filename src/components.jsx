import React from 'react';

export class Page extends React.Component {

  _addCard(title, description) {
    alert('A card has been added!');
  }

  render() {
    return (
      <div id="app">
        <Sidebar addCard={this._addCard.bind(this)}/>
        <Main/>
      </div>
    );
  }
}

export class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <CardForm addCard={this.props.addCard}/>
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
          title: 'Up Next',
          id: 'up-next',
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
          key: 1,
        },
        {
          title: 'Done',
          id: 'done',
          cards: [
            {
              title: 'Cake Homepage HTML/CSS',
              description: 'Code on Code on Code on Code',
              hasDeleteAction: true,
              hasCompleteAction: true,
              id: 1,
            },
          ],
          key: 2,
        },
      ],
    };

  }

  render () {
    return (
      <div id="main">
        {
          this.state.columns.map( (column) => {
            return (
              <CardColumn
                id={column.id}
                title={column.title}
                cards={column.cards}
                key={column.key} />
            );
          })
        }
      </div>
    );
  }
}

export class CardForm extends React.Component {

  _handleSubmit(event) {
    event.preventDefault();

    let title = this._title;
    let description = this._description;

    this.props.addCard(title.value, title.description);
  }

  render() {
    return (
      <form id="add-card-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="form-title">New Card</div>
        <input
          id="title-text"
          type="text"
          ref={ (input) => this._title = input } />
        <input
          id="description-text"
          type="textarea"
          ref={ (input) => this._description = input } />
        <button className="add-card" type="submit">+</button>
      </form>
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
          <div id={this.props.id} className="card-column">
            <div className="card-column-title">{this.props.title}</div>
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
