/**
 * Class NavigatePanel.Classes.Demo
 */
Ext.define('NavigatePanel.Classes.Demo', {
    extend: 'Ext.container.Container',

    renderTo: Ext.getBody(),

    defaults: {
        minWidth: 300,
        height: 100,
        bodyPadding: 10,
        autoShow: true
    },

    items: [{
        xtype: 'window',
        title: 'Module NavigatePanel',
        bodyStyle: 'background:#68ff68;',
        x: 10,
        y: 20,
        html: 'Module NavigatePanel created successfully.'
    }]
});