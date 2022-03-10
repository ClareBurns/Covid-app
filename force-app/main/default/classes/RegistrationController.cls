public with sharing class RegistrationController {
    @AuraEnabled(cacheable=true)
    public static List<Registration__c> getRegistrations() {
            return [
                SELECT Id, Name, Last_Name__c, Date__c, Dose_Status__c FROM Registration__c ORDER BY Name 
            ]; 
    }
}
