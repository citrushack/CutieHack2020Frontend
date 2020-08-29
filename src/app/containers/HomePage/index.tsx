import React from 'react';
import { Helmet } from 'react-helmet-async';
import auth from 'utils/auth';
import { Button, CssBaseline, Typography } from '@material-ui/core';

export class HomePage extends React.Component {
  state = { showButton: false };

  componentDidMount() {
    if (auth.getToken()) {
      this.setState({ showButton: true });
    }
  }

  logout = e => {
    e.preventDefault();
    auth.clearAppStorage();
    this.setState({ showButton: false });
  };

  render() {
    return (
      <>
        <CssBaseline></CssBaseline>
        <Helmet>
          <title>Cutie Hack</title>
          <meta name="description" content="Cutie Hack" />
        </Helmet>
        <Typography variant="h4" align="left" component="h1" gutterBottom>
          HomePage container
        </Typography>

        {this.state.showButton ? (
          <>
            <Button onClick={this.logout} color="primary" variant="contained">
              Logout
            </Button>
            <Button
              onClick={e => {
                window.open('/account', '_self');
              }}
              color="primary"
              variant="contained"
            >
              My Account
            </Button>
          </>
        ) : (
          <div>
            <Button
              onClick={e => {
                window.open('/auth', '_self');
              }}
              color="primary"
              variant="contained"
            >
              Login
            </Button>
            <Button
              onClick={e => {
                window.open('/register', '_self');
              }}
              color="primary"
              variant="contained"
            >
              Apply
            </Button>
          </div>
        )}
      </>
    );
  }
}
