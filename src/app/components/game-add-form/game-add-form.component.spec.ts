import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAddFormComponent } from './game-add-form.component';

describe('GameAddFormComponent', () => {
  let component: GameAddFormComponent;
  let fixture: ComponentFixture<GameAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
