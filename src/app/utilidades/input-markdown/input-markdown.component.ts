import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Input()
  contenidoMarkdown:any = '';

  @Input()
  placeHolderTextarea: string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string>=new EventEmitter<string>();

  inputTextArea(texto:string){
    this.contenidoMarkdown = texto;
    this.changeMarkdown.emit(texto);
  }
}
