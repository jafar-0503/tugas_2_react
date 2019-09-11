import React, {Component} from 'react';

class ListMakanan extends Component {
  constructor(props){
    super(props);
    this.state = {
      datalist: this.props.makanan
    };
  }
  render() {
    return(
      <img src={this.props.makanan} alt="Product Makanan" width="150" />
    )
  }
}

export default ListMakanan;
