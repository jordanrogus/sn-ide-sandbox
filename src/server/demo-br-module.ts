import { gs } from '@servicenow/glide'
import validator from 'validator'

export const infoUpdate = (current: any, previous: any) => { 
    gs.addInfoMessage('Hello from Fluent Business Rule!');
    const value = current.getValue('comment');
    gs.addInfoMessage('Is: ' + value + ' an IP address? The answer is: ' + validator.isIP(value));
};