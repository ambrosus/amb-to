import React, {
    Component
} from 'react';

// This function takes a component...
const AssetWrapper = (WrappedComponent, seletSyle, data) => {
    // ...and returns another component...
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                style: seletSyle(data)
            };
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent style={this.state.style} data={data} {...this.props} />;
        }
    };
}

export default AssetWrapper;