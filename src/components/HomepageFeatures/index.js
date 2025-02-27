import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Lucid Chain Wizard?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      This tool allows you to migrate a service chain from iTop and Redmine without information loss.
      The Wizard uses the SC Model to store the information of the service chain.
      </>
    ),
  },
  {
    title: 'What is SCModel?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
    <>
      The SC Model (Service Chain Model) is a YAML file modelling language that contains a standardized description of a service chain.  
      See more details in <a href="http://lucidchain.specs.governify.io" target="_blank" rel="noopener noreferrer">SCModel official documentation</a>.
    </>
    ),
  },
  {
    title: 'What is Lucid Chain Wizard?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
