import { PipeTransform, Pipe } from '@angular/core';

@Pipe(
    {
        name: 'appCamelCase'
    }
)
export class CamelCasePipe implements PipeTransform {

    transform(str: string): string {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
}