import { } from './quotes';
import { QuotesComponent } from './quotes/quotes.component';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quote("personSub","author","description",0,0,new Date(2018,6,9))).toBeTruthy();
  });
});
