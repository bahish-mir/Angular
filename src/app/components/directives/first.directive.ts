import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector:'[appFirst]'
})

export class FirstDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  public ngOnInit(): void {
    const elem = this.element.nativeElement as HTMLElement;
    this.renderer.setStyle(elem, 'background', 'lightblue');
  }
}

