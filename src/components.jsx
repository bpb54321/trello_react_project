import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {
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
class CardColumn extends React.Component {

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

export default CardColumn;

// I want each Card Column to display an array of cards.
// To do this, I should create a state array in CardColumn which contains an array of Card objects.
