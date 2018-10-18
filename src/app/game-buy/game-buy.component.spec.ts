import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBuyComponent } from './game-buy.component';

describe('GameBuyComponent', () => {
  let component: GameBuyComponent;
  let fixture: ComponentFixture<GameBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
