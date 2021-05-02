import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props }) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames('features-tiles-inner section-inner pt-0', topDivider && 'has-top-divider', bottomDivider && 'has-bottom-divider');

  const tilesClasses = classNames('tiles-wrap center-content', pushLeft && 'push-left');

  //const localize = JSON.parse(localStorage.getItem('localize'));

  const sectionHeader = {
    title: 'Construye la imagen completa',
    paragraph:
      'El cambio, tanto tecnológico como cultural, está ocurriendo más rápido que nunca. En este clima, las empresas modernas vivirán o morirán por su capacidad de adaptarse rápidamente. Como resultado, las empresas están recurriendo a enfoques Lean/Agile para innovar, reducir costos y seguir siendo relevantes en un mercado cambiante. Business Agility cambia su forma de pensar, cómo trabaja y cómo interactúa con las personas. Este cambio es crucial en todos los niveles de la organización, desde el área de operaciones hasta el C-Level.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image src={require('./../../assets/images/feature-tile-icon-01.svg')} alt="Features tile icon 01" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Investigación y diseño de soluciones</h4>
                  <p className="m-0 text-sm">Pasar a un desarrollo ágil para acelerar la capacidad de crear software con alta calidad y ponerlo en manos de sus clientes.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image src={require('./../../assets/images/feature-tile-icon-02.svg')} alt="Features tile icon 02" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Analizar y planificar</h4>
                  <p className="m-0 text-sm">Descubra cómo los planes de entrega permiten a varios equipos planificar, programar y coordinar su trabajo.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image src={require('./../../assets/images/feature-tile-icon-03.svg')} alt="Features tile icon 03" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Desarrollo y testing</h4>
                  <p className="m-0 text-sm">Etapas de prueba e implementación dentro del alcance de trabajo predefinido.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image src={require('./../../assets/images/feature-tile-icon-04.svg')} alt="Features tile icon 04" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Calidad y aceptacion del producto</h4>
                  <p className="m-0 text-sm">
                    Asegúrese de que cualquier problema o brecha se capture con criterios de aceptación sólidos definidos que se adapten a las necesidades del producto.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image src={require('./../../assets/images/feature-tile-icon-05.svg')} alt="Features tile icon 05" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Despliegues</h4>
                  <p className="m-0 text-sm">Integración continua y despliegue continuo como mantra.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image src={require('./../../assets/images/feature-tile-icon-06.svg')} alt="Features tile icon 06" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Flujo de trabajo robusto</h4>
                  <p className="m-0 text-sm">
                    Asegúrese de que todos estén en la misma página sin importar cuán complejos se vuelvan los proyectos o cuán grandes sean las cargas de trabajo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
