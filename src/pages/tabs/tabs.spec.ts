import { TabsPage } from "./tabs";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("TabsPage", () => {
  let fixture, tabspage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsPage
      ],
      imports: [IonicModule.forRoot(TabsPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    tabspage = fixture.componentInstance;
  });

  it("should create tabs navigation bar", () => {
    expect(tabspage).toBeTruthy();
    expect(tabspage instanceof TabsPage).toEqual(true);
  });

  it("should contain Calculator tab", () => {
    expect('#calculator_tab').toBeTruthy();
  });

  it("should contain About tab", () => {
    expect('#about_tab').toBeTruthy();
    });
});