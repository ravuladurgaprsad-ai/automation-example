export class homepage{
constructor(page){
    //getByRole locators
this.playwrightpract=page.locator("//a[text()='PlaywrightPractice']");
this.primarybtn=page.getByRole('button',{name:'Primary Action'});
this.togglebtn=page.getByRole('button',{name:'Toggle Button'});
this.usernamefield=page.getByRole('textbox',{name:'Username:'});
this.checkbox=page.getByRole('checkbox',{name:' Accept terms'});
//links click
this.hmlink=page.locator("//section[@id='role-locators']//a[text()='Home']");
//get bytext
this.textloc=page.locator("//span[text()='colored text']");
this.submitbt=page.locator("//button[text()='Submit Form']");
//label getbylabel
this.emaillabel=page.getByLabel('Email Address:');
this.passwordlabel=page.getByLabel('Password:')
//get by placeholders
this.namepc=page.getByPlaceholder('Enter your full name');
this.phonepc=page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
this.productsear=page.getByPlaceholder('Search products...');
this.searchbtn=page.locator("//button[text()='Search']")
this.express=page.getByLabel(' Express');
//getbyalttesxt
this.img=page.getByAltText('logo image');
this.homelink=page.getByTitle('Home page link');
this.savebt=page.getByRole('button',{name:'Save'});
//getbytest id
this.testid=page.getByTestId('profile-email');
//fileupload
this.singlefilechoose=page.locator("//input[@id='singleFileInput']")
this.statussinglefile=page.locator("//p[text()='Single file selected: test1.txt, Size: 0 bytes, Type: text/plain']")
this.uploadfile1=page.locator("//button[text()='Upload Single File']")
this.multifilechose=page.locator('#multipleFilesInput');
this.multistatus=page.locator("//p[text()='test2.txt, Size: 0 bytes, Type: text/plain ']");
this.uploadttwofile=page.locator("//button[text()='Upload Multiple Files']");
//static webtable
this.headers=page.locator("//div[@id='HTML1']//tr//th")
this.colm=page.locator("//th[text()='BookName']//parent::tr");
this.author=page.locator("//td[text()='Learn JS']/following-sibling::td[1]")
this.priceauthor=page.locator("//td[text()='Mukesh']/following-sibling::td[2]")
this.subject=page.locator("//td[text()='Learn JS']/parent::tr/child::td[3]")
this.allprice=page.locator("//div[@id='HTML1']//td[last()]");
this.allsubject=page.locator("//div[@id='HTML1']//td[3]")
//pagination tables 
this.pages=page.locator("//table[@id='productTable']/following-sibling::ul//a")
this.row=page.locator("//table[@id='productTable']/tbody/tr")
this.tbprices=page.locator("//table[@id='productTable']//td[3]")
//input 3forms at one time
this.inputs=page.locator('//div//input[@class="input-field"]')
this.submitbtn=page.locator('//button[@class="rectangular-button"]')
}}