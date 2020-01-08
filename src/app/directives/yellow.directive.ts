import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[appYellow]'
})
export class YellowDirective {

    @Input('appYellow')
    color: string;

    constructor(el: ElementRef<HTMLBaseElement>) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('click')
    onClick() {
        console.log('component clicked', this.color);
    }
}
