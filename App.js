class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //component foi montado na tela! 
    }

    render() {
        return <div>
            <h1 class="title">Nosso boilerplate de React</h1>
        </div>;
    }
}

const domContainer = document.querySelector('#mashup');
ReactDOM.render(<App/>, domContainer);