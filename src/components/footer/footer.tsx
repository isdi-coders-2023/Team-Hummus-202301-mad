import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="./img/logo_rick_and_morty.svg" alt="Rick and Morty Logo" />
        <div className="footer__p">
          <p>Copyright © Adult Swim </p>
          <p>All rights reserved</p>
        </div>
      </div>
      <div className="footer__hummus">
        <p className="footer__hummus-title">By Hummus team</p>
        <div className="footer__names">
          <div>
            <img src="" alt="" />
            <p>Jimena</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Antonio</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Joaquin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
