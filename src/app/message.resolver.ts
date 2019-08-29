import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class MessageResolver implements Resolve<string> {

  resolve(): Observable<string> {
    return of('hello world').pipe(delay(2000));
  }

}
