import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

const LeadForm = () => {

  useEffect(() => {
    let iframe = document.getElementById("JotFormIFrame-231657184518058");
    if (iframe) {
      var src = iframe.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
      }
      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
        src = src.substr(0, src.indexOf("?"))
      }
      iframeParams.push("isIframeEmbed=1");
      iframe.src = src + "?" + iframeParams.join('&');
    }

    const handleIFrameMessage = (e) => {
      if (typeof e.data === 'object') { return; }
      var args = e.data.split(":");
      if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
      if (!iframe) { return; }
      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = args[1] + "px";
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + "px";
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
      }
    };
  
    window.addEventListener('message', handleIFrameMessage);
  
    return () => {
      window.removeEventListener('message', handleIFrameMessage);
    };
  }, []);

  return (
    <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', width: '80%' }}>
      <Helmet>
        <title>Lead Form</title>
        <meta name="description" content="Submit your information to become a lead." />
      </Helmet>
      
      <iframe
        id="JotFormIFrame-231657184518058"
        title="Allow Us To Give You Back Your Time! Tell Us How We Can Help!"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/231657184518058"
        frameborder="0"
        style={{minWidth:'100%',maxWidth:'100%',height:'539px',border:'none'}}
        scrolling="no"
      />
    </Box>
  );
};

export default LeadForm;
