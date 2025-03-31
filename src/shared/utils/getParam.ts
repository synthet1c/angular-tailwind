import {ParamMap} from '@angular/router';
import {map} from 'rxjs/operators';

export const getParam = (param: string) => map((paramMap: ParamMap) => paramMap.get(param))
