import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { DetailViewComponent } from './detail-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailViewComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
