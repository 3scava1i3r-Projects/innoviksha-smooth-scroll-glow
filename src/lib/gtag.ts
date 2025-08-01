import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

export const initGA = () => {
  if (process.env.NODE_ENV === 'production' && TRACKING_ID) {
    ReactGA.initialize(TRACKING_ID);
  }
};

export const trackPageView = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};
