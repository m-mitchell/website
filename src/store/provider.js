import React, { Component } from 'react'

import { Provider } from './createContext'

class AppProvider extends Component {
  state = {}

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export default AppProvider
