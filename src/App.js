import React, {Component} from "react"

class App extends Component {

  codigo = () => {
    return <h2>Marcos Adriano</h2>
  }

  dois = (y) => {
    return (
      y *2 
    )
  }

  render () {
    return (
      <div>
        {this.codigo()}
        <h2>{this.dois(2)}</h2>
      </div>
    )
  }
}

export default App;