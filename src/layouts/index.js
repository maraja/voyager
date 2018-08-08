import React from "react";
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby-link'
import "../assets/scss/main.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
            <Helmet>
                <link rel="stylesheet" href={withPrefix('skel.css')} />
            </Helmet>
                <Header />
                {children()}
                <Footer />
            </div>
        );
    }
}

Template.propTypes = {
    children: React.PropTypes.func
};

export default Template;
