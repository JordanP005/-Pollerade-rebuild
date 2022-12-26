import React from "react";
import { Link } from "react-router-dom";

function TermsConditions() {
  return (
    <div className="terms-wrapper">
      <nav>
        <div className="nav-wrapper">
          <Link to="/">
            <img src="images/logo.png" alt="logo" className="nav-logo" />
          </Link>
          <ul>
            <li>
              <a href="#Services">
                Services
                <img src="images/services-icon.svg" />
              </a>
            </li>
            <li>
              <a href="#About">
                About <img src="images/info-icon.svg" />
              </a>
            </li>
            <li>
              <a href="#Contact">
                Contact
                <img src="images/contact-icon.svg" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="terms">
        <h1>Terms and Conditions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui
          mauris, ultrices vitae imperdiet et, rhoncus eget nibh. Vestibulum eu
          mattis tortor. Morbi lobortis metus et augue viverra blandit. Vivamus
          vulputate lacinia commodo. Vivamus commodo vehicula orci ac maximus.
          Vestibulum leo mi, laoreet et nisi eu, efficitur hendrerit purus. Duis
          purus nisl, posuere non molestie in, rutrum id sem. Duis ultricies
          viverra varius. Morbi hendrerit nibh non nulla convallis sollicitudin.
          Maecenas fringilla metus iaculis neque semper pellentesque. Proin
          vitae lectus sed orci pretium accumsan. Nunc condimentum et orci in
          feugiat. Nunc malesuada consequat luctus. In efficitur lacinia nisi,
          ac mollis magna tristique et. Etiam eget enim quis tellus convallis
          venenatis eu et magna. Integer ut sollicitudin leo. Fusce commodo
          iaculis nunc, quis finibus libero accumsan a. Morbi vel sapien
          fermentum, rutrum tortor at, elementum diam. Mauris et eros sit amet
          tortor consectetur viverra. Praesent vel neque id nibh porttitor
          aliquet a eget mi. Phasellus sed ex faucibus, aliquam eros at, tempus
          nunc. Maecenas suscipit tincidunt elementum. Sed facilisis consectetur
          est et ornare. Quisque ac nibh nec ante eleifend dignissim. Morbi
          dignissim ligula quis lorem rhoncus imperdiet. Donec ultrices odio
          lectus, eget maximus nisi semper sed. Proin pulvinar malesuada
          tristique. Proin sagittis diam et lacus luctus, suscipit vehicula nisl
          tincidunt. Praesent luctus ex eget orci imperdiet feugiat. Maecenas
          rhoncus sapien id nisi fringilla, sed pellentesque leo malesuada.
          Nulla porta, tortor in fermentum condimentum, turpis ante feugiat
          tellus, sit amet dapibus ipsum arcu eget quam. Nulla imperdiet
          pulvinar pellentesque. Donec et iaculis mi, cursus rutrum dolor.
          Praesent at sagittis ex, non luctus lorem. Mauris a porta erat.
          Aliquam consectetur felis in vehicula venenatis. Suspendisse non felis
          odio. Maecenas ut sagittis lacus. Cras pellentesque eu orci in
          porttitor. Aenean a erat efficitur, eleifend risus sit amet, convallis
          dolor. Nunc faucibus rhoncus tortor eget sollicitudin. Suspendisse a
          hendrerit ex. Nullam consequat mauris id tortor venenatis, quis
          convallis ex interdum. Duis condimentum dignissim pharetra.
          Suspendisse dapibus porttitor purus ac vulputate. Cras malesuada eget
          libero eget porta. Vestibulum aliquet pretium lorem, id lobortis purus
          rhoncus ac. In vel arcu posuere, consectetur purus in, vehicula quam.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Etiam at turpis blandit augue dignissim
          pulvinar. Proin tristique in turpis eleifend efficitur. Nullam lacinia
          in enim nec sodales. Curabitur eget condimentum dui. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Integer a odio ut neque rutrum convallis eu ut diam.
          Donec finibus sem eu nibh gravida efficitur. Cras luctus dictum
          sapien, in viverra quam. Mauris a mi sit amet dui placerat ultrices
          sed ultricies purus. Quisque elementum vitae tortor at cursus. Donec
          ligula dui, luctus sed mi sed, tempor eleifend arcu. Nam congue lorem
          lectus, at accumsan ante porttitor vitae. Praesent eget nunc et ligula
          imperdiet cursus in vel nisi. In eu bibendum nulla.
        </p>
      </section>
    </div>
  );
}

export default TermsConditions;
