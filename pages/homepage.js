let homepage = function(){

    let fisrtNumber = element(by.model('first'));

    let secondNumber = element(by.model('second'));

    let goButton = element(by.buttonText('Go!')).click();

    this.get = function(url){
        browser.get(url);
    }
   
    this.enterFirstNumber = function(first){
        fisrtNumber.sendKeys(first);
    }

    this.enterSecondNumber = function(second){
        fisrtNumber.sendKeys(second);
    }

    this.clickGo = function(){
        goButton.click();
    }

    this.verifyResult = function(result){
        let result = element(by.cssContainingText('.ng-binding',result));
        
        expect(result.getText()).toEqual(result);
    }

}

module.exports = new homepage();