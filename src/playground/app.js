class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.decision = this.decision.bind(this);
        this.addOpt = this.addOpt.bind(this);
        this.remove = this.remove.bind(this);
        this.state ={
            options : []
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
        alert(option);
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
    render(){
        const subtitle='Put your life in hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length} removeAll={this.removeAll} decision={this.decision}/>
                <Options options={this.state.options} remove={this.remove}/>
                <AddOption addOpt={this.addOpt}/>
            </div>
        );
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}
Header.defaultProps = {
    title : 'Indecision'
};
const Action = (props) => {
    return(
        <div>
            <button onClick={props.decision} disabled={props.hasOptions>0 ? false : true}>What should I do?</button>
            <button onClick={props.removeAll} disabled={props.hasOptions>0 ? false : true}>Remove All</button>
        </div>
    );
}
const Options = (props) => {
    return(
        <div>
            <p>Length: {props.options.length}</p>
            {props.options.length>0 ? <p>Your options are:</p> : 'Please add an option to get started.'}
            {props.options.map((option) => {
                    return(<Option key={option} optionText={option} remove={props.remove}/>);
                }
            )}
        </div>
    );
}
const Option = (props) => {
    return(
        <p>{props.optionText+' '}
            <button onClick={(e) => {props.remove(props.optionText);}}>Remove</button>
        </p>
);
}
class AddOption extends React.Component{
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOpt}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

 ReactDOM.render(<IndecisionApp />, document.getElementById('app'));