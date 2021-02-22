
require('chromedriver');
var webdriver=require('selenium-webdriver');
const {until, elementTextMatches}=require('selenium-webdriver/lib/until');
const{By}=require('selenium-webdriver/lib/by');

var driver =new webdriver.Builder().forBrowser('chrome').build();
//driver.manage().setTimeouts({implicit: (1000)});
driver.manage().window().maximize();


class BasePage{

    constructor()
    {
        global.driver=driver;
    }

    go_to_url(theurl){
        driver.get(theurl); 
    }


    teardown()
    {

        driver.close();
        driver.quit();
    }
    async waitforElementTobePresent(locator) {
       await driver.wait(function() {
        return driver.findElement(locator).elementIsVisible;
        },
       10000);
  }
    


    clickandWait(locator){
     //   waitforElementTobePresent(locator);
     
     var el= driver.findElement(locator);

     const button = driver.wait(function (){
         return el.isDisplayed();
     })


     button.then(function (el) {
         
         
     })



    }

    async setText(locator,textToEnter)
    {
      var el=driver.findElement(locator);

       (await el).isDisplayed().then(function(){el.sendKeys('textToEnter')});

    }



}
module.exports=BasePage;


