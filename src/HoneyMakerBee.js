class HoneyMakerBee extends Bee {
  constructor(color, food, eat) {
    super(color, food, eat)
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot += 1;
  }

  giveHoney() {
    this.honeyPot -= 1;
  }
};
