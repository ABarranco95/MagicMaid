import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography ,Container} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LeadForm = () => {
  const theme = useTheme();

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
          iframe.style.height = (args[1] * 0.9) + "px";  // Cut iframe height by 10%
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
    <Box sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <Helmet>
        <title>Free Quote</title>
        <meta name="description" content="Unlock a world of pristine living. Get your free quote today!" />
      </Helmet>
      <Container maxWidth="lg">

      <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize', md: 'h2.fontSize' } }}>Your Sparkling Clean Home Awaits</Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ fontSize: { xs: 'subtitle2.fontSize', sm: 'subtitle1.fontSize', md: 'h6.fontSize' } }}>Ready to unlock a whole new level of clean? Just fill out the form below and let us turn your home into a sparkling oasis. Your satisfaction is our priority, and we won't rest until your home is as clean as you've always dreamed it could be!</Typography>
      
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
            </Container>

    </Box>
  );
};

export default LeadForm;

