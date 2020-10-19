class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.checkVisibility = this.checkVisibility.bind(this);
        this.state={
            visibility : false
        }
    }
    checkVisibility(){
        this.setState((prev) => {
            return {
                visibility : !prev.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.checkVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility ? <p>Here are the details. Enjoy!!!</p> : ''}
            </div>
        );
    }
} 

ReactDOM.render(<Visibility />, document.getElementById('app'));