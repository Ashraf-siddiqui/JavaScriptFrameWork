const{Builder,By,Key,until}=require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
var BasePage1=require('./basepage');

//var webdriver=require('selenium-webdriver');

var driver
class HomePage extends BasePage{

    Decsription=By.xpath("//*[@id='description']");
SaveButton=By.xpath("//*[text()='SAVE']");
ClearButton=By.xpath("//*[text()='CLEAR']");

moveToReffrealTypeURL()
{

    BasePage1.go_to_url('https://dev.mhea.myhealthcare.co/ReferralType');
}



setDescriptionField(texttoBeenter)
{
    super.setText(this.Decsription,texttoBeenter);
}

ClickOnSaveButton()
{
    super.clickandWait(this.SaveButton);
    console.log('clicked successfully')
}
}
module.exports=new HomePage();