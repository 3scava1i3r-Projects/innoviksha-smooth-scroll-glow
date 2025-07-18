// // // src/components/ScrollToTop.tsx

// // import { useEffect } from 'react';
// // import { useLocation } from 'react-router-dom';

// // export default function ScrollToTop() {
// //   const { pathname } = useLocation();

// //   useEffect(() => {
// //     // This condition checks if the component is running in a browser environment
// //     // before trying to access `window`. This prevents errors during server-side rendering.
// //     if (typeof window !== 'undefined') {
// //       window.scrollTo(0, 0);
// //     }
// //   }, [pathname]); // The effect runs every time the route changes

// //   return null; // This component renders nothing.
// // }

// // components/ScrollToTop.tsx
// "use client";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth", // You can change to "auto" for instant scroll
//     });
//   }, [location.pathname]); // Only run effect when the route changes

//   return null;
// };