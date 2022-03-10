import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import REGISTRATION_OBJECT from '@salesforce/schema/Registration__c';
import FIRST_NAME_FIELD from '@salesforce/schema/Registration__c.Name';
import LAST_NAME_FIELD from '@salesforce/schema/Registration__c.Last_Name__c';
import DATE_FIELD from '@salesforce/schema/Registration__c.Date__c';
import STATUS_FIELD from '@salesforce/schema/Registration__c.Dose_Status__c';

export default class EditRegistration extends LightningElement {
    objectApiName = REGISTRATION_OBJECT; 
    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, DATE_FIELD, STATUS_FIELD]; 
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Registration edited",
            message: "Thank you",
            variant: "success"
        })
        this.dispatchEvent(toastEvent); 
    }
}
