public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, Title, Phone, Email, Picture__c FROM Contact LIMIT 10];
    }
    @AuraEnabled
    public static List<Contact> getImperativeContactList(){
        return [SELECT Id, Name, Title, Phone, Email,Picture__c FROM Contact LIMIT 10];
    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> findContacts(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Title, Phone, Email, Picture__c FROM Contact WHERE Name LIKE :key LIMIT 10];
    }
    @AuraEnabled(cacheable = true)
    public static Contact getSingleContact(){
        return [SELECT Id, Name, Title, Phone, Email, FirstName, LastName, Picture__c FROM Contact LIMIT 1];
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getAllContactList(){
        return [SELECT Id, Name, Title, Phone, Email, Picture__c FROM Contact];
    }

}