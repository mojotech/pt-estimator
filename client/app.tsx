import React from 'react';

interface Props {
  message: string;
}

class App extends React.Component<Props> {
  render() {
    return <p>{this.props.message}</p>;
  }
}

export default App;
