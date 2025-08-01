import ReactGA from 'react-ga4';

const TRACKING_ID = "G-HT3T69HVMR"; // YOUR_OWN_TRACKING_ID

export const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(TRACKING_ID);
  }
};

export const trackPageView = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};
