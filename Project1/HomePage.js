const homepage=require('../pages/HomePage')

describe('This is the describe block',function(){
 
  beforeEach(function(){

    //enter actions performed before test
    console.log('1');
  });


  afterEach(function(){

    //Enter actions to be performed after test

   // homepage.teardown();


  })


  it('POM Test',function(){

    //Enter test steps

   

    homepage.moveToReffrealTypeURL();

    homepage.setDescriptionField('New field of Reffreal created');

    homepage.ClickOnSaveButton();

    

  })





})

