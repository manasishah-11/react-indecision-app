class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.subOne=this.subOne.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count: 0
        };
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('count');
            const count= parseInt(json,10);
            if(!isNaN(count)){
                this.setState(() => ({count}));
            }
        } catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
    addOne(){
        this.setState((prev) => {
            return {
                count : prev.count + 1
            };
        });
    }
    subOne(){
        this.setState((prev) => {
            return {
                count : prev.count - 1
            };
        });
    }
    reset(){
        this.setState(() => {
            return {
                count : 0
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

//let count=0;
//const addOne = () => {
    //count=count+1;
    //renderApp();
//};
//const minusOne = () => {
    //count=count-1;
    //renderApp();
//};
//const reset = () => {
    //count=0;
    //renderApp();
//};

//const appRoot = document.getElementById('app');

//const renderApp = () => {
  //  const tempelateTwo = (
    //    <div>
      //      <h1>Count : {count}</h1>
        //    <button id="b1" onClick={addOne}>+1</button>
          //  <button id="b2" onClick={minusOne}>-1</button>
            //<button id="re" onClick={reset}>Reset</button>
        //</div>
    //);
    //ReactDOM.render(tempelateTwo, appRoot);
//};

//renderApp();
