import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

export class MessageResolver implements Resolve<string> {

  resolve(): Observable<string> {
    return Observable.of('hello world').delay(2000);
  }

}
