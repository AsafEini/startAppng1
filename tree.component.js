module.exports =function() {
    class AppTree {


        constructor(contentDisplay) {
            this.contentDisplay = contentDisplay;
        }

        toggle(child, $event) {
            if (!child.children) {
                return;
            }


            child.expanded = !child.expanded;

            $event.stopPropagation();
        }

        select(child) {
            this.contentDisplay.getFolder(child);


        }

        handleClick($event, id) {
            switch ($event.which) {
                case 3:
                    this.fs.showContextMenu($event.x, $event.y);
                    break;
            }
        }

    }

    appModule.component("tree", {
        controller: AppTree,
        templateUrl: "tree.component.html",
        bindings: {
            group: "<",
            fs: "<",
        }
    });

};
