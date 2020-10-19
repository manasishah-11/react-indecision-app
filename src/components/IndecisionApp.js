import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import AddOption from './AddOption.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.decision = this.decision.bind(this);
        this.addOpt = this.addOpt.bind(this);
        this.remove = this.remove.bind(this);
        this.popup=this.popup.bind(this);
        this.state ={
            options : [],
            selectedOption: undefined
        };
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));
            }
        } catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    removeAll(){
        this.setState(() => ({options : []}));
    }
    decision(){
        const num = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[num];
        this.setState(() => ({selectedOption: option}));
    }
    addOpt(opt){
        if(!opt){
            return 'Enter valid input to add.';
        }
        else if(this.state.options.indexOf(opt) > -1){
            return 'This option already exists!';
        }
        this.setState((prev) => ({options : prev.options.concat([opt])}));
    }
    remove(opt){
        this.setState((prev) => ({options : prev.options.filter((option)=> option !== opt)
        }));
    }
    popup(){
        this.setState(() => ({selectedOption: undefined}));
    }
    render(){
        const title='Indecision';
        const subtitle='Put your life in hands of a computer.';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length} decision={this.decision}/>
                    <div className="widget">
                        <Options options={this.state.options} remove={this.remove} removeAll={this.removeAll} />
                        <AddOption addOpt={this.addOpt}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} popup={this.popup}/>
            </div>
        );
    }
}