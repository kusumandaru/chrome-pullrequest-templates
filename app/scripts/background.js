'use strict';

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  if (chrome.browserAction !== undefined) {
    chrome.browserAction.setBadgeText({text: 'PR'});
  }
});