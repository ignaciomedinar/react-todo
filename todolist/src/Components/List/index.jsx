import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

var i=0
class List extends React.Component{
    
    state={
        todo:'',
        list:[]
    }
    changeUserInput(input){
        this.setState({
            todo: input
        },()=>console.log(input))
    }
    addToList(input){
        let listArray=this.state.list;
        listArray.push(input);
        this.setState({
            list: listArray,
            todo:''
        })
    }
    handleSubmit=async e=>{
        e.preventDefault()
    }
    render(){
        return(
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control 
                        onChange={ (e)=>this.changeUserInput(e.target.value)}
                        type="text" 
                        value={this.state.todo}
                        id='todo' 
                        placeholder='Introduce a to do task'
                    >
                    </Form.Control>
                </Form.Group>
                    <Button 
                        onClick={()=>this.addToList(this.state.todo)}
                        variant="primary" 
                        type="submit"
                        >Primary
                    </Button>
                    <ul>
                        {this.state.list.map( (val)=>
                            <li key={i+=1}>{val}</li>)}
                    </ul>
            </Form>
            
            </>
        )
    }
}

export default List;