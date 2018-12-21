import React, {
    Component
} from 'react';

const shouldRedirect = (WrappedComponent, seletSyle, data) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                style: seletSyle(data)
            };
        }

        render() {
            return <WrappedComponent style={this.state.style} data={data} {...this.props} />;
        }
    };
}

export default shouldRedirect;