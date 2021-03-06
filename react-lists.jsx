let animalList = [
      {
        name: "Cirkus",
        species: "Cat",
        id: 0
        },
        {
        name: "Bianca",
        species: "Guinea pig",
        id: 1
        },
          {
        name: "Sixten",
        species: "Dog",
        id: 2
        }
 ]
				
class App extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
			list: animalList,
            name: "",
            species: "",
            id: animalList.length
        }
      this.updateInputElements = this.updateInputElements.bind(this);
      this.addElementToList = this.addElementToList.bind(this);
      this.clicked = this.clicked.bind(this);
    }
    render(){
        return (
          <div>
          <div>
            <h1>React lists - add animal</h1> 
          </div>
          <div>
            <AddForm 
              updateInputElements={this.updateInputElements}
              addElementToList={this.addElementToList} 
              name={this.state.name} 
              species={this.state.species}/>
            </div>
            <div>
              <MyList 
                list={this.state.list} 
                clickFunction={this.clicked} />   
            </div>
          </div>
            );
    }
    
     clicked(event) {

        let span1 = event.target.parentNode.childNodes[0].innerText;
        let span2 = event.target.parentNode.childNodes[1].innerText;
        this.updateInputElements(span1, span2);
        }
    
    updateInputElements(i1, i2){
        this.setState({name: i1, species: i2})
    }
    addElementToList(object){
        const newList = this.state.list.slice();
        newList.push(object);
        this.setState ({list: newList, id: object.id + 1})
    }
}
class AddForm extends React.Component {
     constructor(props){
        super(props);
        this.state = {
            name: "",
            species: ""
        };
       
     this.nameChange = this.nameChange.bind(this);
     this.speciesChange = this.speciesChange.bind(this);
     this.buttonClicked = this.buttonClicked.bind(this);
     }
    
    render(){
        return(  
          <div>
            <input 
              type="text" 
              id="objectname" 
              onChange={this.nameChange} 
              value={this.props.name} 
              placeholder="Name" />
            <br/>
            <input 
              type="text" 
              id="objectspecies" 
              onChange={this.speciesChange} 
              value={this.props.species} 
              placeholder="Species" />
            <br/>
            <button 
              onClick={this.buttonClicked}>Add
            </button>
          </div>
        );
    }
         
    nameChange(event){
      this.props.updateInputElements(event.target.value, this.state.species)
      this.setState({name: event.target.value})
      
    }
     speciesChange(event){
      this.props.updateInputElements(this.state.name, event.target.value)
      this.setState({species: event.target.value})
    }
     buttonClicked(event){
       this.props.addElementToList({name: this.state.name, species: this.state.species})
    }
    
}
class MyList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem: null
        }
        this.updateSelectedItem = this.updateSelectedItem.bind(this);
    }
        render(){
           const lista = this.props.list;
            const newList = lista.map(
         object => ( 
           <MyItem 
             data={object} 
             clickFunction={this.props.clickFunction}  />));
        return( 
          <div>
          <h3>Name, species</h3>
            <ul>{newList}</ul>   
          </div>
        );  
    }  
    
      updateSelectedItem(){
    }
}
class MyItem extends React.Component {
    render() {
            return( 
			<li 
			key={this.props.data.id} 
			id={this.props.data.id} 
			onClick={this.props.clickFunction}>
			<span>{this.props.data.name + ", "}</span><span>{this.props.data.species}</span>
			</li>
            );
          }          
}
ReactDOM.render(
    <App />, 
    document.getElementById("root")
)