import { Directive, ElementRef, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Directive({
  selector: '[mgmgRequired]',
  standalone: true
})
export class RequiredDirective {
  @Input() mgmgRequired!: FormControl;
  constructor(private el: ElementRef) {}

  span = document.createElement('span');
  ngOnInit() {
    const label = this.el.nativeElement as Element;
   this.span.className = 'text-danger';
   this.span.innerHTML = '*';
    if (this.mgmgRequired && this.mgmgRequired.hasValidator(Validators.required)) {
      
      label.append (this.span);
    }
  }
}
