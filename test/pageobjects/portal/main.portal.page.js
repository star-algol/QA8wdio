import PortalPage from "./portal.page";

class MainPortalPage extends PortalPage {
    open() {
        return super.open('/');
    }
}

export default new MainPortalPage();