import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";


@Directive({
    selector: '[appYellow]'
})
export class YellowDirective implements OnInit {

    @Input('appYellow')
    color: string;

    constructor(private el: ElementRef<HTMLBaseElement>) {
    }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
    }

    @HostListener('click')
    onClick() {
        this.el.nativeElement.style.backgroundColor = this.getRandomColor();
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}
