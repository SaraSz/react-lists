let animalList = [
    /*"Cirkus",
    "Wessung",
    "Sixten",
    "Uffe",
    "Strössel"*/
    
];

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
        list: animalList,
        name: "",
        species: ""
        };
        
    this.nameInput = this.nameInput.bind(this);
    this.speciesInput = this.speciesInput.bind(this);   
    this.buttonClick = this.buttonClick.bind(this); 
        
    }
    
    nameInput(event){
            let name = event.target.value;
                this.setState({name: name});
        }

    speciesInput(event){
            let species = event.target.value;
                this.setState({species: species});    
        }

    buttonClick (event) {
        let newObject= {
            name: this.state.name,
            species: this.state.species ,
                }; 
        animalList.splice();
        animalList.push(newObject);
        this.setState({
            list: animalList
        })
    }
    
    render(){
        return(
        <div>
            <MyList  
                list={this.state.list}
                name={this.state.name}
                species={this.state.species}
                /> 
            <AddForm 
                add={this.buttonClick} 
                nameInput={this.nameInput}
                speciesInput={this.speciesInput}
                name={this.state.name}
                species={this.state.species}
                />
        </div>
        
        );    
    }
}


class AddForm extends React.Component {
   render() {
             return (
                  <form>    
                    <input 
                        id="inputName"
                        type="text"                      
                        placeholder="Name"
                        onChange={this.nameInput}
                        />
                    <br />
                    <input 
                        id="inputSpecies"
                        type="text"
                        placeholder="Species"
                        onChange={this.speciesInput}
                        />   
                    <button onClick={this.buttonClick}>Add</button>
                   </form>    
                ); 
        }

}   

class MyList extends React.Component{
    render(){
        const newList = this.props.list.map(
        (item, index) => <li key={index}>{item.name}</li>)
            return <ul>{newList}</ul>
    }
  
}


ReactDOM.render( 
<App></App>,
document.getElementById("root")
);

/*******************************************************/