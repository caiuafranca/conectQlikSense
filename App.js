class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onMessage(state) {
        this.setState(state)
    }

    componentDidMount() {
        //component foi montado na tela! 
    }

    render() {

        let content = []

        if (this.state.app) {
            content = <div><QlikObject qlikId="a5e0f12c-38f5-4da9-8f3f-0e4566b28398" chartId="helpdesk-line-chart" app={this.state.app} /> </div>
            window.app = content
        }

        return (
            <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
                {content}
                <QlikConnection callback={this.onMessage.bind(this)} appName="app" qvfName="Helpdesk Management.qvf" />
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);