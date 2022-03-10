import { LightningElement } from 'lwc';

export default class HomePage extends LightningElement {

    handleUpdate() {
        console.log('handleUpdate working'); 
        this.template.querySelector('c-registration-list').updateApex(); 
    }
}
