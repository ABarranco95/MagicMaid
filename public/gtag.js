// public/gtag.js

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-10984594222');

// Add event snippet for Website lead conversion page
window.gtag_report_conversion = function(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-10984594222/VloLCILLvYgYEK627vUo',
      'event_callback': callback
  });
  return false;
};