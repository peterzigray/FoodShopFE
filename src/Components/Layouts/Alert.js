import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  //   return <div> {alert.msg}</div>;
  // };
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => <div key={alert.id}>{alert.msg}</div>)
  );
};
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// this component is getting alert state and putting him inside prop of alerts, destracturing up in component
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
