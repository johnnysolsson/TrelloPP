// ==UserScript==
// @name         Trello | 54U Enhancements
// @namespace    https://54u.se/
// @version      0.1.1
// @description  Useful enhancements to Trello
// @author       Johnny Olsson (54u.se)
// @match        https://trello.com/b/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trello.com
// @grant        none
// ==/UserScript==

/*global jQuery*/
/*eslint no-multi-spaces: "off"*/

(function($) {
  'use strict';

  const style_map = {
      'beige1':{
          text: 'Konsulter/Partner',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#877567', width: '408px'},
              '.badge': {width: '100%'},
              // '.plugin-color-yellow': {width: '33%'},
              '*[class*="plugin-color-"]:not(.plugin-color-light-gray)': {width: '31%'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pink1':{              // Just a unique key
          text: 'Bolag',  // Search for this text in the column name
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#876767'},  // Column card holder
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},       // Card in the column
          }
      },
      'pink2':{
          text: 'Kontaktpersoner',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#604A4A'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pink3':{
          text: 'Pågående kundkontakter',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#382929'},
              '.badge': {width: '100%'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pink4':{
          text: 'Bearbetade kontakter. Återkomma senare.',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#341E1E'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pink5':{
          text: 'Fokuskunder',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#2F1515'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pine1':{
          text: 'Behov',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#3E5151'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pine2':{
          text: 'Offert',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#2C3A3A'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pine3':{
          text: 'Intervju',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#192222'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pine4':{
          text: 'Affär/Avslag',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#121F1F'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
      'pine5':{
          text: 'Klart',
          target: 'h2',
          parent: '*[data-testid="list-wrapper"]',
          children: {
              '*[data-testid="list"]': {backgroundColor: '#526C52'},
              // '*[data-testid="trello-card"]': {backgroundColor: 'white'},
          }
      },
  };

  const action_fn = () => {
      for (const [_, style] of Object.entries(style_map)) {
          let $targets = $(`${style.target}:contains('${style.text}')`);
          $targets.each((_, elem) => {
              let $parent = $(elem).parents(style.parent);
              if ($parent.length) {
                  for (const [selector, css] of Object.entries(style.children)) {
                      if (selector != '.') {
                          $parent.find(selector).css(css);
                      } else {
                          $parent.css(css);
                      }
                  }
              }
          });
      }
  };

  $(action_fn);                // Once on document ready
  $('html').hover(action_fn);  // Again on hover in case the page transitions

})(jQuery.noConflict());