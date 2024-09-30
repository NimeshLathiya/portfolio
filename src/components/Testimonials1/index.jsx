/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${
          this.props.withBG ? "bg-img" : ""
        } ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${
          this.props.parallaxie ? " parallaxie" : ""
        } ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/testimonials-bg.jpg)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What Peapole Says?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <p>
                    I highly recommend Nimesh Lathiya for any front-end
                    development project.Their technical expertise, attention to
                    detail, and problem-solving skills are second to none.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                milan katira
                              </h6>
                              <span className="author-details">
                                Senior software engineer,InstaService Inc
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    Working with Nimesh Lathiya was a pleasure. They have a deep
                    understanding of front-end development,
                    and were able to deliver a high-quality product within a
                    tight deadline.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                              Tejas Chauhan
                              </h6>
                              <span className="author-details">
                                Senior Software engineer, Morgan Stanley
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    Nimesh Lathiya is an exceptional front-end developer. They
                    are able to seamlessly integrate different technologies and
                    platforms to create robust and scalable solutions that meet
                    business needs.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                              Bhargav Vadhiya
                              </h6>
                              <span className="author-details">
                              Senior Software Engineer,Ksolves India Limited 
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
