import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(public http: Http) {
        
        console.log('Data service connected...');
    }

    getTranslation(word: string) {
        return this.http.get("/api/?q=" + word + "#en|hu|" + word)
            .map(res => {
                var el = document.createElement('html');
                el.innerHTML = res.text();
                console.log(el);
                var translation = el.getElementsByClassName('short_text');
                if (translation.length > 0) return translation[0].textContent;
                return null;
            });
    }
}
