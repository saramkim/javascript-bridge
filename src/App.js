const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');

class App {
  #bridgeGame;

  play() {
    OutputView.printStartPhrase();
  }

  make(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeGame = new BridgeGame(bridge);
  }
}

module.exports = App;
