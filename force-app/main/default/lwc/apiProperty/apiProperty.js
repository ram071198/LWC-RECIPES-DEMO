/* eslint-disable no-alert */
import { LightningElement,track } from 'lwc';

export default class ApiProperty extends LightningElement {
    @track percentage = 50;
    handlePercentageChange(event) {
        if (event.target.value <= 100) {          
            this.percentage = event.target.value;
            if (event.target.value === '') {
                this.percentage = 0;
            }
        }else {
            alert('Please Enter Percentage Between 0 To 100');
        }    
    }
}