import { Directive, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
  selector: '[appEnterPress]'
})

export class EnterPressDirective {
  @Output() enterPress = new EventEmitter();
  @HostListener('keypress', ['$event']) public keyPressHandler(event: KeyboardEvent): void {
    if( event.code === 'Enter' ){
      this.enterPress.next();
    }
  }
}

