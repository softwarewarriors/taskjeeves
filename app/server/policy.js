import { BrowserPolicy } from 'meteor/browser-policy';

BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

var trusted = [
 '*.google-analytics.com'
];

_.each(trusted, function(origin) {
  origin = "https://" + origin;
  BrowserPolicy.content.allowOriginForAll(origin);
});