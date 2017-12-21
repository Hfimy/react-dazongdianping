import React,{PureComponent} from 'react';
import {render} from 'react-dom';

class App extends PureComponent{
    render(){
        return(
            'hello world!'
        )
    }
}

render(<App/>,document.getElementById('root'));