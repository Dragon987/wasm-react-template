import React from 'react';
import ReactDOM from 'react-dom';

const wasm = import("../build/react_rust_wasm");

wasm.then(wasm => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});


class App extends React.Component {

    render() {
        return (
            <div>
                <button onClick={wasm.big_computation}>Run Computation</button>
            </div>
        );
    }
}
