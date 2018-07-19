import React, { Component } from 'react';
import Item from './Components/Item';
import ItemAdded from './Components/ItemAdded'

let items = [{
  src: 'https://www.lavantgardiste.com/16074-large_default/peluche-licorne-lumineuse.jpg',
  name: 'Licorne',
  price: 2,
  stock: 7,
  quantity: 0,
},
{
  src: 'https://s7d9.scene7.com/is/image/DisneyStoreES/412037638888?$yetidetail$&layer=1&src=PZ-SQUARE_2000X2000_PX&defaultImage=no%20image-image_fr',
  name: 'Pinochet',
  price: 15,
  stock: 5,
  quantity: 0,
},
{
  src: 'https://s7d9.scene7.com/is/image/DisneyStoreES/412037643080?$yetidetail$&layer=1&src=PZ-SQUARE_2000X2000_PX&defaultImage=no%20image-image_fr',
  name: 'Tigrou',
  price: 2,
  stock: 2,
  quantity: 0,
}];



class List extends Component {
  constructor(props) {
    super(props);
    this.updateStock = this.updateStock.bind(this);
    this.removeQtt = this.removeQtt.bind(this);
    this.state = {
      items: items,
    }
  }

  updateStock(quantity, name) {
    this.setState({ 
      items: items.find(item => item.name === name).stock -= quantity,
      items: items.find(item => item.name === name).quantity += parseInt(quantity),
    });
  }

  removeQtt(name){
    this.setState({ 
      items: items.find(item => item.name === name).quantity -= 1,
      items: items.find(item => item.name === name).stock += 1,
    });
  }

  render() {
    let totalPrice = items.map((item) => item.price * item.quantity).reduce((a, b) => a+b);

    return (
      <div className="List">
        <div className="items">
          {
            items.map((item, index) => {
              if(item.stock > 0){
                return (
                  <Item key={index} src={item.src} name={item.name} price={item.price} quantity={item.quantity} stock={item.stock} updateStock={this.updateStock} />
                )
              }
            })
          }
        </div>

        <div className="recapItems">
          {
            items.map((item, index) => {
              if(item.quantity > 0){
                return (
                  <ItemAdded key={index} src={item.src} name={item.name} price={item.price} quantity={item.quantity} removeQtt={this.removeQtt} />
                )
              }   
            })
          }
          <div className="total">
            <p>Total : {totalPrice} €</p>
          </div>
        </div>
      </div>
    );
  }
}

export default List;