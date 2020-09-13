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
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World';
    myInput = 'World';

    handleChange(event){
        this.greeting = event.target.value;
        this.myInput = this.greeting;
    }
    
    handleClick(){
        this.greeting = this.myInput + ". It's a pleasure to meet you";
    }
}