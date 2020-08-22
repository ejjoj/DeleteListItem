const ListItems = (props) => {
  const items = props.items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      click={props.click}
    />
  ));

  return (
    <ul>
      {items}
    </ul>
  )
}

const Item = (props) => {
  const {name, click, id} = props;
  return (
    <li id={id}>{name}<button onClick={click}>Usuń</button></li>
  );
}

class DeleteListElement extends React.Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Jan K.'
      },
      {
        id: 2,
        name: 'Anna K.'
      },
      {
        id: 3,
        name: 'Tomasz T.'
      },
      {
        id: 4,
        name: 'Krystian Ż.'
      },
      {
        id: 5,
        name: 'Klaudia K.'
      },
      {
        id: 6,
        name: 'Bartosz S.'
      },
    ]
  }

  handleDeleteButton = e => {
    let elementToDeleteID = parseInt(e.target.parentElement.getAttribute('id'));
    const persons = this.state.persons.filter(person => person.id !== elementToDeleteID);

    this.setState({
      persons
    });
  }

  render() {
    const {persons} = this.state;
    return (
      <ListItems items={persons} click={this.handleDeleteButton} />
    );
  }
}

ReactDOM.render(<DeleteListElement />, document.getElementById('root'));