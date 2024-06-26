import * as config from './config'

export function healthcheck() {
  return fetch(`${config.apiBaseUrl}/health`)
}

export function loadBehaviours() {
  return fetch(`${config.apiBaseUrl}/behaviors`).then(response => response.json())
}

export function loadKeycodes() {
  return fetch(`${config.apiBaseUrl}/keycodes`).then(response => response.json())
}

export function loadCustomBehaviors() {
  return fetch(`${config.apiBaseUrl}/custbehaviors`).then(response => response.json())
}

export function loadCustomKeycodes() {
  return fetch(`${config.apiBaseUrl}/custkeycodes`).then(response => response.json())
}

export function loadKeymap() {
  return fetch(`${config.apiBaseUrl}/keymap`)
    .then(response => response.json())
}

export function loadMacro() {
  return fetch(`${config.apiBaseUrl}/macro`)
    .then(response => response.json())
}

export function loadLayout() {
  return fetch(`${config.apiBaseUrl}/layout`)
    .then(response => response.json())
}
