/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED
} from './constants';

export function requestLinkSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinkFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}
