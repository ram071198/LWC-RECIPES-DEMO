({
    // handleKeyChange: function(component, event) {
    //     var message = event.getSource().get('v.value');
    //     var pubsub = component.find('pubsub');
    //     pubsub.fireEvent('searchKeyChange', message);
    // }

    handleContactSelect: function(component, event){        
        var contactId = event.getParam('contactId')
        var pubsub = component.find('pubsub');
        pubsub.fireEvent('contactSelects', contactId);
    }
});