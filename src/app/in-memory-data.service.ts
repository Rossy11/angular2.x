/**
 * Created by Rossy1 on 2018/11/7.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '赵' },
      { id: 2, name: '钱' },
      { id: 3, name: '孙' },
      { id: 4, name: '李' },
      { id: 5, name: '周' },
      { id: 6, name: '吴' },
      { id: 7, name: '郑' },
      { id: 8, name: '王' },
      { id: 9, name: '冯' },
      { id: 10, name: '陈' }
    ];
    return {heroes};
  }
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
