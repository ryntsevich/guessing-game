class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.minN = min;
        this.maxN = max;

    }

    guess() {
        return this.result = Math.ceil((this.minN + this.maxN) / 2);

    }

    lower() {
        this.maxN = this.guess();

    }

    greater() {
        this.minN = this.guess();

    }
}

module.exports = GuessingGame;
