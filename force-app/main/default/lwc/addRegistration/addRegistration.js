import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import REGISTRATION_OBJECT from '@salesforce/schema/Registration__c';
import FIRST_NAME_FIELD from '@salesforce/schema/Registration__c.Name';
import LAST_NAME_FIELD from '@salesforce/schema/Registration__c.Last_Name__c';
import DATE_FIELD from '@salesforce/schema/Registration__c.Date__c';
import STATUS_FIELD from '@salesforce/schema/Registration__c.Dose_Status__c';

export default class AddRegistration extends LightningElement {
    objectApiName = REGISTRATION_OBJECT; 
    firstNameField = FIRST_NAME_FIELD;
    lastNameField = LAST_NAME_FIELD;
    dateField = DATE_FIELD;
    statusField = STATUS_FIELD; 


    resetForm() {
        let inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields) {
            inputFields.forEach(field=> {field.reset(); }); 
        }
    }

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Registration created",
            message: "Thank you",
            variant: "success"
        })
        this.dispatchEvent(toastEvent); 
        this.resetForm(); 
        this.dispatchEvent(new CustomEvent('update'));
    }

    handleCancel(event) {
        this.resetForm(); 
    }
}