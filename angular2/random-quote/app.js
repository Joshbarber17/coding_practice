(function() {

  var appComponent = ng.core.Component({
    selector: 'my-app',
    template: '<h1>Hello World!</h1>'
  })
  .Class({
    constructor: function() {}
  });

  var appModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule],
    declarations: [appComponent],
    bootstrap: [appComponent]
  })
  .Class({
    constructor:function(){}
  });

  ng.platformBrowserDynamic.platformBrowserDynamic()
    .bootstrapModule(appModule);
})();
