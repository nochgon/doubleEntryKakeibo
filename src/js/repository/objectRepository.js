export class ObjectRepository {
    constructor(debt, credit) {
        this._debt = debt;
        this._credit = credit;
    }

    add(debtAccount, debtAmount, creditAccount, creditAmount) {
        if (debtAccount in this._debt) {
            this._debt[debtAccount] += debtAmount;
        } else {
            this._debt[debtAccount] = debtAmount;
        };

        if (creditAccount in this._credit) {
            this._credit[creditAccount] += creditAmount;
        } else {
            this._credit[creditAccount] = creditAmount;
        };
    }
};
