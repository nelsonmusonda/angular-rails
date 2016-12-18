import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector:'documents',
    templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
    pageTitle: string = 'Documents Dashboard'
    
    
    documents: Document[] = [
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
    ]
    
}