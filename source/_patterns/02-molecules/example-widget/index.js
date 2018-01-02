/**
 * Example JS widget
 *
 * An example of a testable, standalone, javascript-driven widget that makes an api call, writes
 * HTML, and does basic logic. This is a pretty naive re-render-on-data-change approach, using
 * poor-man's Redux and jQuery
 */
import $ from 'jquery';

import 'protons';
import 'molecules/card';

import './_example-widget.scss';

import exampleWidget from './src';

export const name = 'example-widget';

export function disable() {}

export function enable($context) {
  // We have to glue this app to some piece of DOM
  const $attachPoint = $('#js-example-widget', $context);

  // Bail if our attach point is not on screen
  if (!$attachPoint.length) {
    return;
  }

  exampleWidget($attachPoint);
}

export default enable;
