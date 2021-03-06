/**
 * @param quantity
 * @constructor
 */
SecuritySSL = function (quantity) {
    this.price = 55;
    this.tax = {
        enabled: true,
        value: 1.2
    };
    this.reductions = {};
    this.quantity = quantity;
    this.total = 165 + this.price * (this.quantity - 1);
};

SecuritySSL.prototype.setTaxes      = Offer.prototype.setTaxes;
SecuritySSL.prototype.resetTotal    = Offer.prototype.resetTotal;
SecuritySSL.prototype.getTotal      = Offer.prototype.getTotal;
SecuritySSL.prototype.getCents      = Offer.prototype.getCents;
SecuritySSL.prototype.setReductions = Offer.prototype.setReductions;
