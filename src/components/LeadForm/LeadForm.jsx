import React, { useEffect, useRef } from 'react';
import styles from './LeadForm.module.css';
import Footer from '../Footer/Footer';

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
    <div className={styles.leadForm}>
      <h2 className={styles.leadFormTitle}>Get a Free Quote</h2>
      <iframe
  ref={iframeRef}
  src="https://homesparklepros.bookingkoala.com/contact-us?embed=true"
  style={{ border: 'none', height: '1640px', overflow: 'hidden' }}
  width="100%"
  scrolling="no"
  id="iFrameResizer0"
></iframe>
      <script src="https://homesparklepros.bookingkoala.com/resources/embed.js" defer></script>
    {/* <Footer /> */}
    </div>
  );
};

export default LeadForm;
