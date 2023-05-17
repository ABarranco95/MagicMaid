import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';


const LeadForm = () => {
  const iframeRef = useRef(null);

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
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Get a Free Quote</Typography>
      <Box
        component="iframe"
        ref={iframeRef}
        src="https://homesparklepros.bookingkoala.com/contact-us?embed=true"
        sx={{ border: 'none', height: '1640px', overflow: 'hidden', width: '100%' }}
        scrolling="no"
        id="iFrameResizer0"
      />
      <script src="https://homesparklepros.bookingkoala.com/resources/embed.js" defer></script>

    </Box>
  );
};

export default LeadForm;
