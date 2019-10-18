public with sharing class ApexTypesController {
    @AuraEnabled(cacheable=true)
    public static string checkApexTypes(CustomWrapper wrapper){
        System.debug('wrapper '+ wrapper);
        String response = 
                        'You entered "' +
                        wrapper.someString +
                        '" as String, and "' +
                        wrapper.someInteger +
                        '" as Integer value. The list contained ' +
                        wrapper.someList.size() +
                        ' items.';
        return response;
    }
}
