import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.compareStockQtt = this.compareStockQtt.bind(this);
    this.state = {  }
  }

  compareStockQtt(){
    let quantity = document.getElementById(this.props.name).value;
    if (quantity > this.props.stock){
      alert('stock insuffisant')
    } else {
      this.props.updateStock(quantity, this.props.name)
    }
  }

  render() { 
    return ( 
      <div className="Item">
      <div className="imgItem">
        <img src={this.props.src} alt={this.props.name} width="150"/>  
      </div> 
       <div className="detailsItem">
        <h4>{this.props.name}</h4>
        <p>prix : {this.props.price} €</p>
        <p>stock : {this.props.stock}</p>
        <input type="number" id={this.props.name} name="quantity" min="0" />
        <button type="button" onClick={this.compareStockQtt}>Ajouter au panier</button> 
        </div>
      </div> 
     );
  }
}
 
export default Item;