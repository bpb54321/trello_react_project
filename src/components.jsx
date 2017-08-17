import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {
  render() {
    return (
      <li className="card">
        <div className="title">Take React Course</div>
        <div className="description">code on code on code on code...</div>
        <div className="actions">
          <button className="delete-card">X</button>
          <button className="complete-card">></button>
        </div>
      </li>
    );
  }
}

/* Column Component */
class CardColumn extends React.Component {

    constructor() {
      super();

      this.state = {
        cards: [
          {
            title: 'Cake Homepage HTML/CSS',
            description: 'Code on Code on Code on Code',
            actions: 'blah'
          }
        ]
      };
    }
    render() {
        return (
          <div className="card-column">
            <Card/>
            <Card/>
            <Card/>
          </div>
        );
    }
}

export default CardColumn;

// I want each Card Column to display an array of cards.
// To do this, I should create a state array in CardColumn which contains an array of Card objects.
