function FooterLabel() {
  return (
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;{" "}
            <a className="border-bottom" href="/">
              Your Site Name
            </a>
            , All Right Reserved. Designed By{" "}
            <a className="border-bottom" href="https://htmlcodex.com">
              HTML Codex
            </a>
            <br />
            Distributed By{" "}
            <a className="border-bottom" href="https://themewagon.com">
              ThemeWagon
            </a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href="/">Home</a>
              <a href="/">Help</a>
              <a href="/">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLabel;
