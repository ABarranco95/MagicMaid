import React, { useEffect, useRef } from 'react';
import styles from './LeadForm.module.css';

const LeadForm = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'setHeight' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className={styles.leadForm}>
      <h2 className={styles.leadFormTitle}>Get a Free Quote</h2>
      <iframe
        ref={iframeRef}
        src="https://themagicmaidcleaning.bookingkoala.com/contact-us?embed=true"
        style={{ border: 'none', height: '1700px' }}
        width="100%"
        scrolling="no"
      ></iframe>
      <script src="https://themagicmaidcleaning.bookingkoala.com/resources/embed.js" defer></script>
    </div>
  );
};

export default LeadForm;
