module.exports = function() {
    class ContentDisplay {
        constructor() {
            this.folder = null;
        }

        getFolder(child) {
            this.folder = child;
            console.log(child)
        }
    }

    appModule.service("contentDisplay", ContentDisplay);

};