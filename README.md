# dot_kiosk ( or .kiosk )

## Overview:
This is a set of web browser extensions/add-ons that you can install to a machine that functions as a public kiosk.

### Why did I write this?
I wrote this b/c I don't want to track personal data with Analytic trackers if a user is on a public kiosk machine.

## Details:
Following the convention used by [Modernizr](http://www.modernizr.com/), it will add a new CSS class to the &lt;html&gt; tag called 'kiosk'.

This extension/add-on will be executed at the beginning of page load before anything else from HTTP response is parsed.

## Browser Support:
Extensions/Add-Ons have been written for the following web browsers:

* Mozilla Firefox
* Google Chrome
* Safari

### Building / Compiling from Source:
You will have to download/install any necessary tools or SDKs necessary for creating an Extension/Add-On.

* Mozilla Firefox - download the [SDK](https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/jetpack-sdk-latest.zip): 
 * setup SDK and from the shell inside the extension folder, execute this:
   
            cfx xpi

 * [documentation for cfx](https://addons.mozilla.org/en-US/developers/docs/sdk/1.4/dev-guide/addon-development/cfx-tool.html)
* Google Chrome - Follow the steps here: http://code.google.com/chrome/extensions/getstarted.html

## Usage Example:
Examples of use (w/ jQuery):

    if ($(".kiosk").length>0) {
      // this is a kiosk
      // you could do things like bypass Analytic tracking, 
      // or make personal Analytic tracking data anonymous
    } else {
      // this is not a kiosk
      // you could do things like Analytic tracking,
      // or add personal Analytic tracking data
    }
