import ReactGA from 'react-ga4';
import { Metric } from 'web-vitals/src/types/base';

export const reportWebVitals = () => {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(sendWebVitals);
    getFID(sendWebVitals);
    getFCP(sendWebVitals);
    getLCP(sendWebVitals);
    getTTFB(sendWebVitals);
  });
};

const sendWebVitals = (metric: Metric) => {
  if (process.env.NODE_ENV === 'development') {
    console.info('metric', metric);
  } else {
    ReactGA.event({
      category: 'web-vitals',
      action: `${metric.name}-value`,
      value: metric.value,
      nonInteraction: true,
    });
    ReactGA.event({
      category: 'web-vitals',
      action: `${metric.name}-rating`,
      label: metric.rating,
      nonInteraction: true,
    });
  }
};
