/**
*  DON'T BE A DICK PUBLIC LICENSE
* 
* Version 1, December 2009
* 
* Copyright (C) 2017 Estoussel
* 
* Everyone is permitted to copy and distribute verbatim or modified copies of this license document.
* 
* DON'T BE A DICK PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
* 
* Do whatever you like with the original work, just don't be a dick.
* 
* Being a dick includes - but is not limited to - the following instances:
* 
* 1a. Outright copyright infringement - Don't just copy this and change the name.
* 1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
* 1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.
* 
* If you become rich through modifications, related works/services, or supporting the original work, share the love. Only a dick would make loads off this work and not buy the original work's creator(s) a pint.
* 
* Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back
*/

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}