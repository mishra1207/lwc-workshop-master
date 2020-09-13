/**
 * @description       : 
 * @author            : Aman Mishra
 * @group             : 
 * @last modified on  : 09-12-2020
 * @last modified by  : Aman Mishra
 * Modifications Log 
 * Ver   Date         Author        Modification
 * 1.0   09-12-2020   Aman Mishra   Initial Version
**/
import { LightningElement, api, track, wire } from 'lwc';
import findProperties from '@salesforce/apex/SimilarPropertyController.findPorperties';

export default class SimilarProperties extends LightningElement {
    @api recordId;
    @track props;
    @track errorMsg;

    @wire(findProperties,{
        recordId: '$recordId',
        priceRange: '100000'
    })
    props
}