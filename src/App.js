import React from 'react';

import './App.css';

import ButtonProfil from './components/buttonProfil';
import Avatar from './components/avatar';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  profils = [
        {
          nom: 'bob',
          prenom: 'sinclar',
          ddn: Date("1986-01-04 10:34:23"),
        },
        {
          nom: 'martine',
          prenom: 'lorenz',
          ddn: Date("1966-01-04 10:34:23"),
        },
        {
          nom: 'camille',
          prenom: 'solat',
          ddn: Date("1992-01-04 10:34:23"),
        }
        ];
 
  handleClick = (newIndex) => {
    this.setState({
      index: newIndex
    });
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
      <header className="App-header">
        <div style={{display: "flex",flexDirection: "row",justifyContent:"space-evenly",width: "50%"}}>
        {this.profils.map((profil,index) => <ButtonProfil name= {profil.nom} i= {index} clickHandler={this.handleClick} />)}
        </div>
      </header>
        <Avatar profil={this.profils[this.state.index]} />
    </div>
    );
}
}

export default App;
