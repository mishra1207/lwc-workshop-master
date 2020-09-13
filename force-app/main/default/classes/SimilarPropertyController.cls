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
public with sharing class SimilarPropertyController {
    @AuraEnabled(cacheable = true)
    public static List<Property__c> findPorperties(Id recordId, Decimal priceRange) {
        List<Property__c> property = [SELECT Price__c FROM Property__c WHERE Id =: recordId];
        Decimal propertyPrice = property[0].Price__c;
        List<Property__c> similarProperties = getSimilarProperties(recordId, priceRange, propertyPrice);
        return similarProperties;
    }

    public static List<Property__c> getSimilarProperties(Id recordId, Decimal priceRange, Decimal price) {
        Decimal range;
        if (priceRange == null) {
            range = 100000;
        } else {
            range = priceRange;
        }
        return [SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c FROM Property__c WHERE Id != :recordId AND Price__c >: price-range AND Price__c <: price + range];
    }
}
