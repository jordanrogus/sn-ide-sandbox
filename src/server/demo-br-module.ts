import { gs } from '@servicenow/glide'
import validator from 'validator'

export const infoUpdate = (current: any, previous: any) => { 
    gs.addInfoMessage('Hello from Fluent Business Rule!');
    const value = current.getValue('comment');
    const result = validator.isIP(value);
    const msg = result ? 'yes' : 'no';
    gs.addInfoMessage('Is: ' + value + ' an IP address? The answer is: ' + msg);
};