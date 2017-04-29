module.exports=function() {
    class AppContent {

        constructor(contentDisplay) {
            this.contentDisplay = contentDisplay;

        }

         clickedFolder() {

            return this.contentDisplay.folder;
        }

        handleClick($event, id) {
            switch ($event.which) {
                case 3:
                    this.fs.showContextMenu($event.x, $event.y);
                    break;
            }
        }

    }

    appModule.component("content", {
        controller: AppContent,
        templateUrl: "content.component.html",
        bindings: {
            fs: "<",
        }
    });

};