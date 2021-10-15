
const {Builder,By,Key,util}=require('selenium-webdriver')


exports.testing=(async (req,res,next)=>{
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      await driver.quit();
    }
})

exports.validation=(async (req,res,next)=>{
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('howto', Key.RETURN);
    await driver.wait(until.titleIs('pogba'), 1000);
  } 
   finally {
    await driver.quit();
  }
})