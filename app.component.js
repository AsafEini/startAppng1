module.exports =function(){

    class AppController {

    constructor(fileSystem){
        this.fileSystem = fileSystem;
    }
}

appModule.component("myApp", {
    controller: AppController,
    templateUrl: "app.component.html",
});
};