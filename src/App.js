const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridgeGame;
  #tryCount;

  play() {
    OutputView.printStartPhrase();
    InputView.readBridgeSize(this);
    this.#tryCount = 1;
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
    const isEnd = this.#bridgeGame.isEnd();

    this.printMap();

    if (isEnd) this.quit(true);
    else {
      if (isMove) InputView.readMoving(this);
      else InputView.readGameCommand(this);
    }
  }

  printMap() {
    const map = this.#bridgeGame.getMap();
    OutputView.printMap(map);
  }

  retryOrQuit(input) {
    if (input === 'R') {
      this.#tryCount += 1;
      this.retry();
    }
    if (input === 'Q') {
      this.quit(false);
    }
  }

  retry() {
    this.#bridgeGame.retry();
    InputView.readMoving(this);
  }

  quit(isSucceed) {
    OutputView.printResultPhrase();
    this.printMap();
    OutputView.printResult(isSucceed, this.#tryCount);
    Console.close();
  }
}

new App().play();

module.exports = App;
