/*   
----------------------------------------------------------------------------
Version 1.0

ChangeParentClass Widget für fhem-tablet-ui (https://github.com/knowthelist/fhem-tablet-ui)

Wechselt eine Klasse des Parent-Objects aus, abhängig des FHEM Device Status.

(c) Sascha Hermann 2016
----------------------------------------------------------------------------

Änderungen :
07.2016: Erstellung
----------------------------------------------------------------------------

ATTRIBUTE:
~~~~~~~~~~
    Attribute (Pflicht):
    ---------------
    data-type="ChangeParentClass" : Widget-Typ
    data-device : FHEM Device Name

    Attribute (Optional):
    -----------------
    data-states : Die Möglichen Statusse des Device
    data-classes : Die Bootstrap Farbklasse je Status    
*/

function depends_changeparentclass (){
    var deps = [];
    return deps;
};

var Modul_changeparentclass = function () {

    function init() {
        var me = this;
        me.elements = $('div[data-type="'+me.widgetname+'"]');   
        me.elements.each(function(index) {
            var elem = $(this);            
            elem.initData('get' ,'STATE');       
            me.addReading(elem,'get');            
        });
    };

    function update(dev,par) {
        this.elements.filterDeviceReading('get',dev,par)
        .each(function(index) {
            var elem = $(this);
            
            var state = elem.getReading('get').val;
            if (state){
                var states=elem.data('states') || elem.data('get-on');   
                var classes=elem.data('classes') || elem.data('on-classes'); 
                var idx=indexOfGeneric(states,state);            
                
                for(var s=0,len=classes.length; s<len; s++) {
                    elem.parent().removeClass(classes[s])
                }

                elem.parent().addClass(classes[idx]);    
            }
        });
    };
    return $.extend(new Modul_widget(), {
        widgetname: 'changeparentclass',
        init:init,        
        update: update,
    });
}
