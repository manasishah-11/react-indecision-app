import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.addOpt = this.addOpt.bind(this);
        this.state={
            error : undefined
        };
    }
    addOpt(e){
        e.preventDefault();
        const opt = e.target.elements.option.value.trim();
        const error = this.props.addOpt(opt);
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.option.value='';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOpt}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}