import React, { useEffect, useRef } from 'react'
import styles from './GiftCards.module.css';

const GiftCards = () => {
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
    
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
      }, []);
  return (
    // <div><iframe src="https://homesparklepros.bookingkoala.com/gift-cards/send?embed=true" height="100%" width="100%" scrolling="yes"></iframe><script src="https://homesparklepros.bookingkoala.com/resources/embed.js" defer></script></div>
    <div className={styles.leadForm}>
    <h2 className={styles.leadFormTitle}>Get a Free Quote</h2>
    <iframe
      ref={iframeRef}
      src="https://homesparklepros.bookingkoala.com/gift-cards/send?embed=true"
      style={{ border: 'none', height: '100vh' }}
      width="100%"
      scrolling="yes"
    ></iframe>
    <script src="https://homesparklepros.bookingkoala.com/resources/embed.js" defer></script>
  </div>
    )
}

export default GiftCards