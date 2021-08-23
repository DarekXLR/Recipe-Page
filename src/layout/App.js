import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import MaterialMenu from './MaterialMenu';
import Footer from './Footer';

import '../style/App.css';


class App extends Component {
  state = {
    // scroll: 150,
    // firstTop: 0,
    // newTop: null,

  }


  // componentDidMount = () => {
  //   window.addEventListener('scroll', this.handleScroll);

  //   this.setState({
  //     firstTop: document.querySelector('body footer').offsetTop,
  //     newTop: document.querySelector('body footer').offsetTop,

  //   })
  // }

  // handleScroll = () => {

  //   let top = window.scrollY;
  //   let newScroll = this.state.firstTop;
  //   console.log(top)
  //   console.log(this.state.newTop)
  //   if (top > 0) {
  //     this.setState({
  //       scroll: 150,
  //       newTop: newScroll + top,
  //     });
  //   } else if (top = 0) {
  //     this.setState({
  //       scroll: 150,
  //       newTop: this.state.footer.firstTop,
  //     });
  //   } else if (top > 150) {
  //     this.setState({
  //       scroll: top,
  //       newTop: newScroll + top,
  //     });
  //   }

  // }




  render() {
    // const topFooter = document.querySelector('body footer').offsetTop

    return (
      <Router>
        <div className="app">
          <header >
            <Header />
          </header>
          <section className="menu">
            <Menu />
          </section>

          <main className="center">
            <section className="main" >
              <Main />
            </section>
            <section className="container">
              <section className="list"  >
                <MaterialMenu />
              </section>
            </section>
          </main>

          <footer>
            <Footer />
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;