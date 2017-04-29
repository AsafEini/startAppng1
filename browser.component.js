module.exports = function() {
    class AppBrowser {

        constructor(fileSystem) {
            this.fileSystem = fileSystem;
            this.root = fileSystem.root;
        }


    }

    appModule.component("browser", {
        controller: AppBrowser,
        templateUrl: "browser.component.html",
        binding: {}
    });
};