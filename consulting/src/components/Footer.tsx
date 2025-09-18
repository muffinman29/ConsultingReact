function Footer() {
  return (
    <>
      <div className="footer mt-auto py-3 bg-light">
        <div className="container text-center">
          <a href="contact">Contact Us</a>&nbsp;
          <a href="about">Learn More About Us</a>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2025 ACME Tech Consulting</p>
          <p>
            Follow us on
            <a
              href="#"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            and
            <a
              href="#"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
