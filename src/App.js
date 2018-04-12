import React, { Fragment, PureComponent } from "react";

import "./App.css";

class App extends PureComponent {
  state = {
    mainWidth: 0,
    asideWidth: 0
  };

  componentDidMount() {
    const main = document.querySelector("main");
    const aside = document.querySelector("aside");

    window.addEventListener("resize", () => {
      this.setState({
        mainWidth: main.getBoundingClientRect().width.toFixed(),
        asideWidth: aside.getBoundingClientRect().width.toFixed()
      });
    });
  }

  render() {
    const { mainWidth, asideWidth } = this.state;

    return (
      <div className="App">
        <header>
          <h1>hello, grid</h1>
        </header>
        <nav>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
        <main>
          {[...Array(24)].map((arien, i) => <section>Section {i}</section>)}
        </main>
        <aside>
          <section>Section 1</section>
          <section>{`${asideWidth}px`}</section>
          <section>Section 3</section>
        </aside>
        <footer>ok, bye</footer>
      </div>
    );
  }
}

export default App;
