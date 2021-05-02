import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames('features-split-inner section-inner', topDivider && 'has-top-divider', bottomDivider && 'has-bottom-divider');

  const splitClasses = classNames('split-wrap', invertMobile && 'invert-mobile', invertDesktop && 'invert-desktop', alignTop && 'align-top');

  const localize = JSON.parse(localStorage.getItem('localize'));

  const sectionHeader = {
    title: 'Flujo de trabajo que simplemente funciona',
    paragraph:
      'Adáptese fácilmente. Itere más rápido. Entregue el trabajo de forma continua. Asigne fácilmente propietarios de proyectos y tareas para que pueda alcanzar sus objetivos rápidamente y producir un trabajo de alta calidad rápidamente. Adáptese con facilidad Administre cualquier cosa, esperada o no, que se le presente y continúe liderando a su equipo Agile hacia el éxito.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">QVOPS</div>
                <h3 className="mt-0 mb-12">{localize.boxonetitle}</h3>
                <p className="m-0">{localize.boxonepara}</p>
              </div>
              <div className={classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill')} data-reveal-container=".split-item">
                <Image src={require('./../../assets/images/features-split-image-01.svg')} alt="Features split 01" width={528} height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">QVOPS</div>
                <h3 className="mt-0 mb-12">{localize.boxtwotitle}</h3>
                <p className="m-0">{localize.boxtwopara}</p>
              </div>
              <div className={classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill')} data-reveal-container=".split-item">
                <Image src={require('./../../assets/images/features-split-image-02.png')} alt="Features split 02" width={528} height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">QVOPS</div>
                <h3 className="mt-0 mb-12">{localize.boxthirdtitle}</h3>
                <p className="m-0">{localize.boxthirdpara}</p>
              </div>
              <div className={classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill')} data-reveal-container=".split-item">
                <Image src={require('./../../assets/images/features-split-image-03.png')} alt="Features split 03" width={528} height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
