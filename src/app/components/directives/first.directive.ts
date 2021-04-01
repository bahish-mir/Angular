import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector:'[appFirst]'
})

export class FirstDirective implements OnInit {
  @Input() public color: string;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  public ngOnInit(): void {
    const elem = this.element.nativeElement as HTMLElement;
    this.renderer.setStyle(elem, 'background', this.color);
  }
}

