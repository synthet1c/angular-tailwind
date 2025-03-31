import {Injectable} from '@angular/core';
import {Chat} from '#models';
import {sortWith} from 'ramda';
import {descend, ascend, prop} from 'rambda';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private _current = Chat.Sort.RECOMMENDED;

  public get current() {
    return this._current;
  }

  private algorithms = {
    [Chat.Sort.RECOMMENDED]: sortWith<Chat.Model>([
      descend(prop('price')),
      ascend(prop('createdAt')),
    ]),
    [Chat.Sort.OLDEST]: sortWith<Chat.Model>([
      ascend(prop('createdAt')),
    ]),
    [Chat.Sort.NEWEST]: sortWith<Chat.Model>([
      descend(prop('createdAt')),
    ]),
    [Chat.Sort.MOST_EXPENSIVE]: sortWith<Chat.Model>([
      descend(prop('price')),
    ]),
    [Chat.Sort.LEAST_EXPENSIVE]: sortWith<Chat.Model>([
      ascend(prop('price')),
    ]),
  }

  getAlgorithm(algorithm: Chat.Sort) {
    this._current = algorithm;
    return this.algorithms[algorithm];
  }

  getCurrentAlgorithm() {
    return this.algorithms[this.current];
  }

}
