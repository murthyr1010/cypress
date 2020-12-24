class NotifyPage {
    getNotificationMessageSpan() {
        return cy.get('.k-notification-content span')
    }
    getNotificationsCloseAnchor(){
       return cy.get('.k-icon.k-i-close')
    }

}
export default NotifyPage;