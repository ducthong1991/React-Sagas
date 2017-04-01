/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectNavigationContainer from './selectors';
import styles from './styles.css';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.navigationContainer}>
      <Helmet
        title="NavigationContainer"
        meta={[
          { name: 'description', content: 'Description of NavigationContainer' },
        ]}
      />
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
