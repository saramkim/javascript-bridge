const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridgeGame;

  play() {
    OutputView.printStartPhrase();
    InputView.readBridgeSize(this);
  }

  make(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeGame = new BridgeGame(bridge);

    InputView.readMoving(this);
  }

  move(direction) {
    const isMove = this.#bridgeGame.move(direction);

    this.printMap();

    if (isMove) InputView.readMoving(this);
    else InputView.readGameCommand(this);
  }

  printMap() {
    const map = this.#bridgeGame.getMap();
    OutputView.printMap(map);
  }

  retryOrQuit(input) {
    if (input === 'R') {
      this.retry();
    }
    if (input === 'Q') {
      this.quit();
    }
  }

  retry() {
    this.#bridgeGame.retry();
    InputView.readMoving(this);
  }

  quit() {}
}

new App().play();

module.exports = App;
