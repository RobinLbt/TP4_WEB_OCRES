import React from 'react';

class SuperContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {nbOfSuper : 0};
    }

    render(){
        return (
            <div style={{width:'40%',height:'10%',backgroundColor:'blue',margin:'auto',marginTop:'1rem',color:'white'}}>
                <p>Nombre de super : {this.state.nbOfSuper}</p>
                <button onClick={() => { this.setState(
                    {nbOfSuper: this.state.nbOfSuper + 1}
                )}}>👍 C'est super !</button>
            </div>
        );
    }
}

export default SuperContainer;