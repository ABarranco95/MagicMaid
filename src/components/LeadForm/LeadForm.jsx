import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

const LeadForm = () => {
  const iframeRef = useRef(null);

  const setIframeHeight = () => {
    if (window.innerWidth <= 600) {  // smaller screens
      return '1000px';
    } else if (window.innerWidth > 600 && window.innerWidth <= 805) {  // mobile
      return '1000px';
    } else if (window.innerWidth > 805 && window.innerWidth <= 1050) { // tablet
      return '1000px';
    } else {  // desktop
      return '1000px';
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'setHeight' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }

      // Listen for the formSubmitted event from the form provider
      if (event.data.type === 'formSubmitted') {
        // Trigger the conversion event
        window.gtag('event', 'conversion', {
          'send_to': 'AW-10984594222/VloLCILLvYgYEK627vUo',
        });
      }
    };

    const handleLoad = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${iframeRef.current.contentWindow.document.body.scrollHeight}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    iframeRef.current.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Helmet>
        <title>Get a Free Cleaning Quote in Fresno, Madera, and Clovis | Home Sparkle Pros</title>
        <meta name="description" content="Looking for top-notch cleaning services in Fresno, Madera, or Clovis? Submit a form for a fast, free quote from Home Sparkle Pros. We promise swift responses and unbeatable quality. Experience cleanliness like never before!" />
      </Helmet>
      <Typography variant="h4" sx={{ marginTop: 5 }}>Get a Free Quote Today!</Typography>
      <Typography variant="p" sx={{ margin: 5, marginBottom: 0 }}>Leave the Cleaning to the Professionals – Get Your Free Quote for House Cleaning in Fresno, Madera, and Clovis, CA</Typography>
      <Box
        component="iframe"
        ref={iframeRef}
        src="https://homesparklepros.bookingkoala.com/contact-us?embed=true"
        sx={{ border: 'none', height: setIframeHeight(), overflow: 'hidden', width: '100%' }}
        scrolling="no"
        id="iFrameResizer0"
      />
      <script src="https://homesparklepros.bookingkoala.com/resources/embed.js" defer></script>
    </Box>
  );
};

export default LeadForm;
