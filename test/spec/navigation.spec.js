import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', ()=>{
   before(()=>{
       browser.login('student@local.us', 'Localus');
   });

   beforeEach(()=>{
       MainPage.open();
   });

   // afterEach(()=>{
   //     browser.refresh();
   // });

   it('courses page opens', function () {
       MainPage.goToCourses();
       browser.pause(3000);
       CoursesPage.isOpen();
   });

});
