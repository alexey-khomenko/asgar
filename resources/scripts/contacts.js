//----------------------------------------------------------------------------------------------------------------------
// заказ звонка
export function contactData() {
    return {
        show: true,
        call: function (contact) {
            this.show = false;

            console.log(contact);
        }
    };
}