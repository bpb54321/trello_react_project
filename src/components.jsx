import React from 'react';

export class Page extends React.Component {

  constructor(props) {
    super(props);


    // The total number of cards that have been created thus far.
    this.cardCount = 4;

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
              id: 4,
            },
          ],
        },
      ],
    };
  }

  _addCard(title, description) {

    // Array.prototype.slice(), with no parameters, simply copies the array
    let columnsCopy = this.state.columns.slice();
    // Should actually contain a reference to columnsCopy[0]
    let upNextColumn = columnsCopy[0];
    let newCard = {
        title: title,
        description: description,
        hasDeleteAction: true,
        hasCompleteAction: true,
        id: this.cardCount + 1,
      };

    upNextColumn.cards.push( newCard );

    this.cardCount++;

    this.setState({columns: columnsCopy});
  }

  removeCard(columnIndex, cardId) {
    let columnsCopy = this.state.columns.slice();
    let selectedColumn = columnsCopy[columnIndex];
    let selectedCards = selectedColumn.cards;
    // Array.filter: runs a callback on each element and returns a new array
    // If callback returns true for element, it is kept, if false, is filtered out
    let cardsAfterRemoval = selectedCards.filter( (card) => card.id !== cardId );
    selectedColumn.cards = cardsAfterRemoval;
    this.setState({columns: columnsCopy});
  }

  render() {
    return (
      <div id="app">
        <Sidebar addCard={this._addCard.bind(this)}/>
        <Main columns={this.state.columns} removeCard={this.removeCard.bind(this)}/>
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

export class CardForm extends React.Component {

  constructor() {
    super();
  }


  _handleSubmit(event) {
    event.preventDefault();
    this.props.addCard(this.title.value, this.description.value);
    this.title.value = '';
    this.description.value = '';
  }

  render() {
    return (
      <form id="add-card-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="form-title">New Card</div>
        <label htmlFor="title-text">Title</label>
        <input
          id="title-text"
          type="text"
          ref={ input => this.title = input }
          required
        />
        <label htmlFor="description-text">Description Text</label>
        <input
          id="description-text"
          type="textarea"
          ref={ input => this.description = input } />
        <button className="add-card" type="submit">+</button>
      </form>
    );
  }
}

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="main">
        {
          this.props.columns.map( column => {
            return (
              <CardColumn
                removeCard={this.props.removeCard}
                id={column.id}
                title={column.title}
                cards={column.cards}
                key={column.id} />
            );
          })
        }
      </div>
    );
  }
}



/* Column Component */
export class CardColumn extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div id={this.props.id} className="card-column">
        <div className="card-column-title">{this.props.title}</div>
        <ul className="card-list">
          {
            this.props.cards.map( card => {
              return (
                <Card
                  removeCard={this.props.removeCard}
                  title={card.title}
                  description={card.description}
                  hasDeleteAction={card.hasDeleteAction}
                  hasCompleteAction={card.hasCompleteAction}
                  id={card.id}
                  key={card.id}
                />);
            })
          }
        </ul>
      </div>
    );
  }
}

/* Define Card Component Here*/
export class Card extends React.Component {
  render() {

    let deleteButton = '';
    let completeButton = '';

    if (this.props.hasDeleteAction) {
      deleteButton = <button className="delete-card" onClick={() => this.props.removeCard(0, this.props.id)}>X</button>
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



