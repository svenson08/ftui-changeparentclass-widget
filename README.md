# Change Parent Class Widget für FHEM Tablet UI

Dieses Widget ist für den Einsatz von FHEM Tablet UI 2.x vorgesehen..

Verwendet:
-----------
* JQuery: https://jquery.com/  [in fhem enthalten]


Installation
-------------
Die Datei **widget_changeparentclass.js** muss in das js Verzeichnis der fhem-tablet-ui installation.

 
Attribute des weekdayTimer-Widgets
-----------
####Pflicht-Attribute:
- **data-device** : FHEM Device Name
- **data-states** : Die Möglichen Statusse des Device
- **data-classes** : Die CSS-Klassen die Abhängig vom Status gesetzt werden sollen.


Beispiel
-----------
```html
        <div class="information">
            <div data-type="changeparentclass" data-device="STATUS_Beschattung" data-states='["An","Aus"]' data-classes='["klein","gross"]' ></div>
        </div>    
```        

In diesem Beispiel wird das im Parent die CSS Klasse "klein" hinzugefügrt (und gross entfernt) wenn der Status des Device STATUS_Beschattung An ist.

