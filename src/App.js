import React, { Component } from "react";
import { Heart, Smile } from "react-feather";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
    scale: 1
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1, scale: this.state.scale + 0.075 });
  };

  render() {
    return (
      <main className='App'>
        {this.state.count < 20 ? (
          <>
            <h1>I love React this much:</h1>

            <p className='heart-container'>
              <Heart
                size={20}
                color={this.state.count > 9 ? "#fa5e8a" : "gray"}
                style={{ marginRight: "20px", transform: `scale(${this.state.scale})` }}
              />{" "}
              Count: {this.state.count}
            </p>

            <button className='heart-increment' onClick={this.handleClick}>
              More love
            </button>
          </>
        ) : (
          <div className='lots-of-love'>
            <Smile size={30} color='#fa5e8a' /> <Smile size={30} color='#fa5e8a' /> <Smile size={30} color='#fa5e8a' />
            <h1>Wow - that's a lot of love!!</h1>
          </div>
        )}
      </main>
    );
  }
}

export default App;
