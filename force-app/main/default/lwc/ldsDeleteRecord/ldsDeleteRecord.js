import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { reduceErrors } from 'c/ldsUtils';

export default class LdsDeleteRecord extends LightningElement {
    @track accounts;
    @track error;

    @wire(getAccountList) 
    wiredAccounts(result){
        this.wiredAccountsResult = result;
        if (result.data) {
            this.accounts = result.data;
            this.error = undefined;
        }
        else if (result.error) {
            this.accounts = undefined;
            this.error = result.error;
        }
    }
    deleteAccount(event){
        const recordId = event.target.dataset.recordid;
        deleteRecord(recordId)
                .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account deleted',
                            variant: 'success'
                        })
                    );
                    return refreshApex(this.wiredAccountsResult);
                })
                .catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error deleting record',
                            message: reduceErrors(error).join(', '),
                            variant: 'error'
                        })
                    );
                });
    }
}