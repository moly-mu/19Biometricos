import './Footer.css';

function Footer() {
  return (
    <footer className="footer-ft">
      <div className="footer-logo-ft">
          <img
            src="https://ww1.aulavirtualuniversitariadecolombia.co/pluginfile.php/1/theme_klassroom/logo/1732826367/thumbnail_logo-universidad_balnco40px.png"
            alt="logo"
            className="header-footer-logo-ft"
          />
        </div>
      <div className="footer-content-ft">

        <div className="footer-links-ft">
          <div className="footer-column-est">
            <p>Estudiantes</p>
            <div className="footer-list-est">
              <a href="tel:6017124802">(601)712-48-02 
              </a>
              <a href="http://wa.me/573232467576">WhatsApp 
              </a>
              <a href="https://universitariadecolombia.edu.co/preguntas-frecuentes/">Preguntas Frecuentes</a>
            </div>
          </div>

          <div className="footer-column-dct">
            <div className="footer-list-dct">
              <p>Documentos IUDC</p>
              <a href="https://universitariadecolombia.edu.co/documentos-iudc/">Documentos</a>
              <a href="https://universitariadecolombia.edu.co/carreras-profesionales/normatividad-en-seguridad-y-salud-en-el-trabajo/">SG-SST</a>
            </div>
          </div>
        </div>
      </div>

      {/* Aquí está la línea divisoria */}
      <hr className="footer-divider-ft" />

      <div className="footer-container-ft">
        <div className="copyright-text-ft">
          @ Todos los derechos reservados 2022 | Vigilada Mineducación | Aprobada Oficialmente
        </div>
        <div className="buttons-social-ft">
          <a href="https://www.facebook.com/universitariaco/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCy32aUKfACpU4cvE1TtmgxA">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/universitaria_oficial/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/universitaria-de-colombia/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.tiktok.com/@universitariadecolombia?lang=es" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;