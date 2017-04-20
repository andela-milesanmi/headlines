import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: '30px',
    };

    return (
      <div>
        <div className="footer" style={footerStyles}>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Maranatha A. Ilesanmi, 2017</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

module.exports = Footer;
