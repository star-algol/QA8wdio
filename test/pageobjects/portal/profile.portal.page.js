import PortalPage from './portal.page';

class ProfilePortalPage extends Page {

    get iconUser () { return $('.ant-avatar-square'); }

    isOpen() {
        expect(browser).toHaveUrlContaining('/profile/');
        expect(this.iconUser).toBeDisplayed();
    }
}

export default new ProfilePortalPage();
