import React from 'react';

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

module.exports = Footer;
