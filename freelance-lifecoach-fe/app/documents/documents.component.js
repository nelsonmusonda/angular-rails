"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = 'Documents Dashboard';
        this.documents = [
            {
                title: "My first Doc",
                description: '1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                file_url: 'http://google.com',
                updated_at: '12/16/16',
                image_url: 'http://google.com',
            },
            {
                title: "My Second Doc",
                description: '1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                file_url: 'http://google.com',
                updated_at: '12/16/16',
                image_url: 'http://google.com',
            },
            {
                title: "My Third Doc",
                description: '1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                file_url: 'http://google.com',
                updated_at: '12/16/16',
                image_url: 'http://google.com',
            },
            {
                title: "My Fourth Doc",
                description: '1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                file_url: 'http://google.com',
                updated_at: '12/16/16',
                image_url: 'http://google.com',
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html'
    }),
    __metadata("design:paramtypes", [])
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map