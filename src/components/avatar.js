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
            <div style={{width:"40%",height:"fit-content",backgroundColor: this.state.style ,margin:"auto",color:"white"}}>
                <div style={{width:'10rem',height:'20rem'}}>
                <img src={require(`../../assets/${this.props.profil.img}`)} style={{maxHeight:'100%',minHeight:'100%'}} alt=''/>
                </div>
                <p style={{display:"inline-block",padding:"1rem"}}>{this.props.profil.prenom}</p>
                <p style={{display:"inline-block"}}>{this.props.profil.nom}</p>
                <p>{this.props.profil.ddn}</p>
                <button onClick={this.getStyle} style={{margin:'0',padding:'0'}}>Change style</button>
            </div>
        );
    }
}

export default Avatar;