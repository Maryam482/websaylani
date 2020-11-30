import React from 'react';
import AddList from './AddList';

 class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [
            {title : 'Breakfast', id :1},
            {title : 'Prepare', id :2},
            {title : 'Take a ride', id :3}
        ]
    }
}
addtodos = (todo) => {
    console.log(todo);
    let newTodos = [...this.state.todos]
    newTodos.push(todo);
    this.setState({
       todos : newTodos
    })
}
deletetodo = (id) => {
    console.log(id)
    let newobj = [...this.state.todos]
    let newTodos = newobj.filter(item => item.id != id) 
    this.setState({
        todos:newTodos
    })
}
render(){
    return(
        <div>
            <AddList addtodos = {this.addtodos}/>
            <ul>
                {this.state.todos.map(
                    item => (
                       <li key = {item.id}>{item.title}
                       <button key={item.id} onClick = { () =>this.deletetodo(item.id)}>x</button>
                       </li>
                )
                    
                )}
            </ul>
        </div>
    )

}
}
export default List;