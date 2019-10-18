import { LightningElement, api } from 'lwc';

export default class ContactListItemBubbling extends LightningElement {
    @api contact;
    handleSelect(event) {
        console.log('contact.Picture__c ', this.contact.Picture__c);
        
        event.preventDefault();
        const selectEvent = new CustomEvent('contactselect', {
            bubbles : true
        });
        this.dispatchEvent(selectEvent);
    }
}