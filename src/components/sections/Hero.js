import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import ModalMail from '../elements/ModalMail';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, ...props }) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [mailModalActive, setMailmodalactive] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  // const openModalMail = (e) => {
  //   e.preventDefault();
  //   setMailmodalactive(true);
  // };

  const closeModalMail = (e) => {
    e.preventDefault();
    setMailmodalactive(false);
  };

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames('hero-inner section-inner', topDivider && 'has-top-divider', bottomDivider && 'has-bottom-divider');
  const localize = JSON.parse(localStorage.getItem('localize'));
  const subjectmail = `mailto:qvopsgroup@gmail.com?Subject=${encodeURIComponent(localize.mailsubject)}`;

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">QVOPS</span> {localize.title}
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                {localize.subtitle}
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary">
                    <a href={subjectmail} target="_blank">
                      {localize.buttonContact}
                    </a>
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="https://docs.google.com/forms/d/1JJbrYpmcKPuYKyAnj_OL09Hyq17duh1PgOTysp5VU3w/edit" target="_blank">
                    {localize.buttonAssessment}
                  </Button>
                </ButtonGroup>
              </div>
              <ModalMail id="mail-modal" show={mailModalActive} handleClose={closeModalMail} />
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a data-video="https://player.vimeo.com/video/227340878" href="#0" aria-controls="video-modal" onClick={openModal}>
              <Image className="has-shadow" src={require('./../../assets/images/video-placeholder.jpg')} alt="Hero" width={896} height={504} />
            </a>
          </div>
          <Modal id="video-modal" show={videoModalActive} handleClose={closeModal} video="https://player.vimeo.com/video/227340878" videoTag="iframe" />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
