import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchText: string): SafeHtml {
    if (!searchText) return value;
    const regex = new RegExp(`(${searchText})`, 'gi');
    const highlightedText = value.replace(regex, `<mark>$1</mark>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}

