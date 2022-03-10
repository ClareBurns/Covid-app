import { NavigationMixin } from 'lightning/navigation';
import { api, LightningElement, wire } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Registration__c.Name';
import LAST_NAME_FIELD from '@salesforce/schema/Registration__c.Last_Name__c';
import DATE_FIELD from '@salesforce/schema/Registration__c.Date__c';
import STATUS_FIELD from '@salesforce/schema/Registration__c.Dose_Status__c';
import ID from '@salesforce/schema/Registration__c.Dose_Status__c'; 
import getRegistrations from '@salesforce/apex/RegistrationController.getRegistrations'; 
const COLUMNS = [
    {label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text'}, 
    {label: 'Last Name', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text'},
    {label: 'Date', fieldName: DATE_FIELD.fieldApiName, type: 'date'},
    {label: 'Status', fieldName: STATUS_FIELD.fieldApiName, type: 'picklist'}
]
import {refreshApex} from '@salesforce/apex'; 


export default class RegistrationList extends LightningElement {
    columns = COLUMNS; 
    @wire(getRegistrations)
    registrations; 


    @api
    updateApex() {
        console.log("Update apex working"); 
        refreshApex(this.registrations); 
}

    getSelectedName(event) {
        let registrationId; 
        const selectedRows=event.detail.selectedRows; 
        //for (let i=0; i< selectedRows.length; i++) {
            registrationId = selectedRows[0].Id; 
            console.log(registrationId);
        this[NavigationMixin.Navigate] ({
            type: 'standard__recordPage', 
            attributes: {
                recordId: registrationId, 
                objectApiName: 'Registration__c',
                actionName: 'view',
            },
        });
        console.log("end"); 
    }
}