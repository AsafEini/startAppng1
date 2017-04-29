 module.exports= function() {
     class FileSystem {

         constructor() {
             this.root = {
                 children: [{
                     id: 1, name: 'root', children: [
                         {
                             id: 2, name: 'sub1', children: [
                             {id: 4, name: 'sub3', children: []},
                             {id: 5, name: 'file1', content: 'text'},
                         ]
                         },
                         {
                             id: 3, name: 'sub2', children: [
                             {
                                 id: 6, name: 'sub4', children: [
                                 {id: 7, name: 'file2', content: 'text'}
                             ]
                             }
                         ]
                         },
                     ]
                 }]
             };

             this.isContextMenu = false;
             this.posX = 0;
             this.posY = 0;
         }

         showContextMenu(x, y) {
             this.isContextMenu = true;
             this.posX = x + 3;
             this.posY = y + 3;
         }

         closeContextMenu() {
             this.isContextMenu = false;
         }

         getPosX() {
             return this.posX + 'px';
         }

         getPosY() {
             return this.posY + 'px';
         }


     }


     appModule.service("fileSystem", FileSystem);
 };