import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightWidth: number;
  @Input('appHighlight') highlightColor: string;
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
    this.el.nativeElement.style.width = this.highlightWidth + 'px';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
