import React from 'react';

export default class AppDrawer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const gameList = games.map(game =>
      <li key={game.number}>{game.title}</li>
    );
    return (
      <div>
        <i className='fa-solid fa-bars'></i>
        <div className='drawer-container'>
          <h2>Choose a Game</h2>
            <ul>{gameList}</ul>
        </div>
      </div>
    );
  }
}

const games = [
  { number: '001', title: 'Harvest Moon 64' },
  { number: '002', title: 'Harvest Moon: FoMT' },
  { number: '003', title: 'Harvest Moon: AWL' },
  { number: '004', title: 'Rune Factory: A Fantasy HM ' },
  { number: '005', title: 'Rune Factory 4' }
];
