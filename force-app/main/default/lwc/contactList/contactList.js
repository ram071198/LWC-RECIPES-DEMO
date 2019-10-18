import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ContactList extends LightningElement {
    @wire(getContactList) contacts;

    handleSelect(event){
        event.preventDefault();

        const selectEvent = new CustomEvent('contactselect',{
            detail: { contactId: event.currentTarget.dataset.contactId }
        });
        this.dispatchEvent(selectEvent);
    }
}