import React from 'react';

import './App.css';

import ButtonProfil from './components/buttonProfil';
import Avatar from './components/avatar';
import SuperContainer from './components/superContainer';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  profils = [
        {
          nom: 'sinclar',
          prenom: 'bob',
          ddn: new Date('1984').toLocaleString(),
          img: '1.jpg'
        },
        {
          nom: 'lorenz',
          prenom: 'pedro',
          ddn: new Date('1969').toLocaleString(),
          img: '2.jpg'
        },
        {
          nom: 'solat',
          prenom: 'camille',
          ddn: new Date('1997').toLocaleString(),
          img: '3.jpg'
        }
        ];
 
  handleClick = (newIndex) => {
    this.setState({
      index: newIndex
    });
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <div style={{display: "flex",flexDirection: "row",justifyContent:"space-evenly",width: "50%"}}>
        {this.profils.map((profil,index) => <ButtonProfil name= {profil.nom} i= {index} clickHandler={this.handleClick} />)}
        </div>
      </header>
        <Avatar profil={this.profils[this.state.index]} />
        <SuperContainer/>
    </div>
    );
}
}

export default App;
