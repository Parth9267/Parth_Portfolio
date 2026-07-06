import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">
          © {year} <span className="gradient-text">Parth Chaudhari</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
