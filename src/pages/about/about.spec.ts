import { AboutPage } from "./about";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("AboutPage", () => {
  let fixture, aboutpage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutPage
      ],
      imports: [IonicModule.forRoot(AboutPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    aboutpage = fixture.componentInstance;
  });

  it("should create the about page", () => {
    expect(aboutpage).toBeTruthy();
    expect(aboutpage instanceof AboutPage).toEqual(true);
  });

//   it('should have user default values', () => {
//     expect(homepage.user).toEqual({ distance: 1000, age: 20 });
//   });

//   it('should have calculate function', () => {
//     spyOn(homepage, 'calculate'); // we use jasmine to spy on a function

//     homepage.calculate()

//     expect(homepage.calculate).toHaveBeenCalled(); // check if the function has been called
//   });
});