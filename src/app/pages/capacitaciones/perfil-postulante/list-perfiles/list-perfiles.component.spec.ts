import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerfilesComponent } from './list-perfiles.component';

describe('ListPerfilesComponent', () => {
  let component: ListPerfilesComponent;
  let fixture: ComponentFixture<ListPerfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPerfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
