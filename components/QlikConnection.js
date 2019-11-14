class QlikConnection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.openQlikConnection();
    }

    openQlikConnection() {
        let me = this;

        let prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
        let config = {
            host: window.location.hostname,
            prefix: prefix,
            port: window.location.port,
            isSecure: window.location.protocol === "https:"
        };

        require.config({
            baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
        });

        require(["js/qlik"], function (qlik) {
            qlik.setOnError(function (error) {
                me.props.callback({ errorMessage: 'Error upon loading QVF from Qlik ' +
                 error, app: null });
                console.log(error);
            });
            //open apps — inserted here —
            var app = qlik.openApp(me.props.qvfName, config);
            var state = { errorMessage: null };
            state[me.props.appName] = app;
            me.props.callback(state);
            window.qlik = app
        });
    }

    render() {
        return <span />;
    }
}