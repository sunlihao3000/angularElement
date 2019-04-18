import { async, TestBed } from '@angular/core/testing';
import { GreetModule } from './greet.module';

describe('GreetModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GreetModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GreetModule).toBeDefined();
  });
});
