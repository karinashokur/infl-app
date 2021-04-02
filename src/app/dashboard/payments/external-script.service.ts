import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ExternalScriptService {
  constructor() { }
  public loadScript(url: string) {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
