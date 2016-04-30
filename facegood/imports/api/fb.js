import { ServiceConfiguration } from 'meteor/service-configuration'

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '111022135972917',
    secret: '98744a687670603250375b805cd6ea0c'
});
