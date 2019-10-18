import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexWireMethodToFunction extends LightningElement {
    @track contacts;
    @track error;

    @wire(getContactList) 
    wiredContact({error, data}){
        if (error) {
            this.error = error;
            this.contacts = undefined;
        }else if (data){
            this.contacts = data;
            this.error = undefined;
        }
    }
}