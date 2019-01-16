// TODO
class GroceryList extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    render() {
      
      return (
          <li>{this.props.items}</li>
      );
    }
}



var GroceryListItem = (props) => (
  <ul>
    {props.items.map(items =>
      <GroceryListItem items={items} />
      )}
  </ul>
);

ReactDOM.render(<GroceryListItem />, document.getElementById('app'));


// /*
//     <h2> My Shopping List </h2>
//     <GroceryList items = {['Meatballs', 'Kale']}/>

// */