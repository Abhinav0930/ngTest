import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';

import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

//import {addMatchers, newEvent} from 

//import {Heroes, FakeHeroService} from './testing';

import {AppModule} from './app.module';

import { AppComponent } from './app.component';

import { HeroService } from './hero.service';
import { Hero } from './hero';
//import { MockService } from './mock-service';

const Hero_Obj: Hero[] = [{id:42, name:'Saikat1'}];

class MockService {
  getHeroes(){
    return Promise.resolve(Hero_Obj);
  }
}

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let page: Page;
let heroService: HeroService;

describe('AppComponent', () => {
  const service = new MockService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations : [AppComponent],
      providers: [
        {provide: HeroService, useValue: service}
      ]
    })
    .compileComponents()
    .then(createComponent);
  }));

  it('should display heroes', () => {
    expect(page.heroRows.length).toBeGreaterThan(0);
  });
  /*it('1st hero should match 1st test hero', () => {
    const expectedHero = Heroes[0];
    const actualHero = page.heroRows[0].textContent;
    //expect(actualHero).toContain(expectedHero.id, 'hero.id');
    expect(actualHero).toContain(expectedHero.name, 'hero.name');
  });*/
 /* it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*/

});
function createComponent() {
  fixture = TestBed.createComponent(AppComponent);
  comp = fixture.componentInstance;
  heroService = TestBed.get(HeroService);

  // change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    // got the heroes and updated component
    // change detection updates the view
    fixture.detectChanges();
    page = new Page();
  });
}
class Page {
  /** Hero line elements */
  heroRows: HTMLLIElement[];

  /** Highlighted element */
  highlightDe: DebugElement;

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {
    this.heroRows = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);
    
    // Find the first element with an attached HighlightDirective
    //this.highlightDe = fixture.debugElement.query(By.directive(HighlightDirective));

    // Get the component's injected router and spy on it
    //const router = fixture.debugElement.injector.get(Router);
    //this.navSpy = spyOn(router, 'navigate');
  };
}


