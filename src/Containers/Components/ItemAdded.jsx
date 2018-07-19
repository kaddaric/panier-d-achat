import React, {Component} from 'react';

class ItemAdded extends Component {
  constructor(props) {
    super(props);
    this.removeQtt = this.removeQtt.bind(this);
    this.state = {  }
  }

  removeQtt(){
    this.props.removeQtt(this.props.name)
  }

  render() { 
    return ( 
      <div className="ItemAdded">
      <div className="imgItem">
        <img src={this.props.src} alt={this.props.name} width="100"/> 
      </div>
      <div className="detailsItem">
        <h4>{this.props.name}</h4>
        <p>prix : {this.props.price} €</p>
        <p>Quantité : {this.props.quantity}</p>
      </div>
      <div className="removeArticle">  
        <button type="button" onClick={this.removeQtt}>Supprimer un article</button>
      </div>
      </div> 
     );
  }
}
 
export default ItemAdded;