/**
 * @description       : 
 * @author            : Aman Mishra
 * @group             : 
 * @last modified on  : 09-13-2020
 * @last modified by  : Aman Mishra
 * Modifications Log 
 * Ver   Date         Author        Modification
 * 1.0   09-12-2020   Aman Mishra   Initial Version
**/
import { LightningElement, api, wire } from 'lwc';
import {NavigationMixin, CurrentPageReference} from 'Lightning/navigation';

export default class SimilarProperty extends NavigationMixin(LightningElement) {
    @api item;

    @wire(CurrentPageReference) pageRef;

    navigateToRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.item.Id,
                objectApiName: 'Property__c',
                actionName: 'view',
            },
        });
    }
}