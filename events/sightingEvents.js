import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert'

export const sightingEvents = new EventEmitter();

sightingEvents.on('Sighting-added', createAlert)