import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class PubsubSearchBar extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    handleKeyChange(event){
        fireEvent(this.pageRef, 'searchkeychange', event.target.value);
    }
}