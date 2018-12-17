import { CalculatorPage } from "./calculator";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("CalculatorPage", () => {
  let calculatorpage, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorPage
      ],
      imports: [IonicModule.forRoot(CalculatorPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useClass: class { NavParams = jasmine.createSpy("NavParams"); }},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPage);
    calculatorpage = fixture.componentInstance;
  });

  it("should create the calculator page", () => {
    expect(calculatorpage).toBeTruthy();
    expect(calculatorpage instanceof CalculatorPage).toEqual(true);
  });

  it('should have calculateBMI function', () => {
    spyOn(calculatorpage, 'calculateBMI'); // we use jasmine to spy on a function

    calculatorpage.calculateBMI()

    expect(calculatorpage.calculateBMI).toHaveBeenCalled(); // check if the function has been called
  });

  it("should set the message to 'Underweight' for underweight BMI values", () => {
    calculatorpage.weight = 40;
    calculatorpage.height = 150;
    calculatorpage.calculateBMI();

    expect(calculatorpage.bmiMessage).toEqual('Underweight');
  });

  it("should set the message to 'Normal' for normal BMI values", () => {
    calculatorpage.weight = 50;
    calculatorpage.height = 150;
    calculatorpage.calculateBMI();

    expect(calculatorpage.bmiMessage).toEqual('Normal');
  });

  it("should set the message to 'Overweight' for overweight BMI value", () => {
    calculatorpage.weight = 60;
    calculatorpage.height = 150;
    calculatorpage.calculateBMI();

    expect(calculatorpage.bmiMessage).toEqual('Overweight');
  });

  it("should set the message to 'Obese' for obese BMI value", () => {
    calculatorpage.weight = 70;
    calculatorpage.height = 150;
    calculatorpage.calculateBMI();

    expect(calculatorpage.bmiMessage).toEqual('Obese');
  });

});