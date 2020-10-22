import React from 'react';

class Avatar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {style: "blue"};
      }
    
      backgroundColors= ["red","blue","green","yellow","black","grey","brown"];

    getStyle = () => {
        var newStyle = "";
        do{
        newStyle = this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
        }while(newStyle === this.state.style)
        this.setState({
            style : newStyle
        });
    }

    render(){
        return (
            <div style={{width:"40%",height:"40rem",backgroundColor: this.state.style ,margin:"auto",color:"white"}}>
                <p>Image profil</p>
                <p style={{display:"inline-block",padding:"1rem"}}>{this.props.profil.prenom}</p>
                <p style={{display:"inline-block"}}>{this.props.profil.nom}</p>
                <p>{this.props.profil.ddn}</p>
                <button onClick={this.getStyle}>Change style</button>
            </div>
        );
    }
}

export default Avatar;