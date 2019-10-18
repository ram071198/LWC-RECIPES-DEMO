import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from "lightning/navigation";
import findContacts from '@salesforce/apex/ContactController.findContacts';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';

export default class PubsubContactList extends LightningElement {
    searchKey = '';

    @wire(CurrentPageReference) pageRef;

    @wire(findContacts, {searchKey : '$searchKey'}) 
    contacts;

    connectedCallback(){
        registerListener('searchkeychange', this.handleSearchKeyChange, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    handleSearchKeyChange(searchKey){
        console.log('contacts ', this.contacts);
        
        this.searchKey = searchKey;
    }

    handleContactSelect(event){
        fireEvent(this.pageRef, 'contactselected', event.target.contact.Id);
    }
}