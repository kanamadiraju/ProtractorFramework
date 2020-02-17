//let homepage = require('../pages/homepage').default;



describe('demo calculator test', function(){

    it('addition test', function(){
        
       // browser.driver.ignoreSynchronization = true;
        
     //   browser.driver.manage().window().maximize();
        browser.get("http://juliemr.github.io/protractor-demo/");
      //browser.sleep(10000);
    //    homepage.get("http://juliemr.github.io/protractor-demo/");
        //browser.waitForAngularEnabled(false);
        browser.sleep(2000);
     //   homepage.enterFirstNumber('4');
     //   homepage.enterSecondNumber('5');
      //  homepage.clickGo();
      //  homepage.verifyResult('9');

       element(by.model('first')).sendKeys("1");
        
        element(by.model('second')).sendKeys("3");

        element(by.buttonText('Go!')).click();
        browser.sleep(3000);
       
        let result = element(by.cssContainingText('.ng-binding','4'));
        
        expect(result.getText()).toEqual('4');

        

    });

    it('substraction test', function(){
        
        // browser.driver.ignoreSynchronization = true;
         
      //   browser.driver.manage().window().maximize();
         browser.get("http://juliemr.github.io/protractor-demo/");
       //browser.sleep(10000);
     //    homepage.get("http://juliemr.github.io/protractor-demo/");
         //browser.waitForAngularEnabled(false);
         browser.sleep(2000);
      //   homepage.enterFirstNumber('4');
      //   homepage.enterSecondNumber('5');
       //  homepage.clickGo();
       //  homepage.verifyResult('9');
 
        element(by.model('first')).sendKeys("1");
         
         element(by.model('second')).sendKeys("3");
 
         element(by.buttonText('Go!')).click();
         browser.sleep(2000);
        
         let result = element(by.cssContainingText('.ng-binding','5'));
         
         expect(result.getText()).toEqual('5');
 
         
 
     });



});