const app={
    title:'Indecision App',
    subtitle:'Put your life in hands of a computer',
    options: ['One','Two']
};
const formsubmit = (e) => {
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        renderApp();
    }
};
const wipe = () => {
    app.options=[];
    renderApp();
};
const selection = () => {
    const num = Math.floor(Math.random()*app.options.length);
    const option = app.options[num];
    alert(option);
};
let vis=false;
const visibility =() => {
    vis=!vis;
    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const tempelate = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length>1 ? <p>Length: {app.options.length}</p> : 'No options'}
            <p>
                <button disabled={!app.options.length} onClick={selection}>What should I do?</button>
                <button disabled={!app.options.length} onClick={wipe}>Remove All</button>
            </p>
            <div>
                <form onSubmit={formsubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
            <ol>
                {
                    app.options.map((option) => {
                            return <li key={option}>{option}</li>;
                        })
                }
            </ol>
            <p>
                <button onClick={visibility}>{vis ? 'Hide Details' : 'Show details'}</button>
                {vis ? <p>This is some deets!</p> : '' }
            </p>
        </div>
    );
    ReactDOM.render(tempelate, appRoot);
};

renderApp();
