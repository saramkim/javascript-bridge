/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #turn = 0;
  #map = [[], []];

  constructor(bridge) {
    this.#bridge = bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    if (this.#bridge[this.#turn] === direction) {
      this.#turn += 1;
      this.makeMap(direction, true);
      return true;
    } else {
      this.makeMap(direction, false);
      return false;
    }
  }

  makeMap(direction, isMove) {
    const symbol = isMove ? 'O' : 'X';

    if (direction === 'U') {
      this.#map[0].push(symbol);
      this.#map[1].push(' ');
    } else if (direction === 'D') {
      this.#map[0].push(' ');
      this.#map[1].push(symbol);
    }
  }

  getMap() {
    const upperSymbol = this.#map[0].join(' | ');
    const lowerSymbol = this.#map[1].join(' | ');
    const upperMap = `[ ${upperSymbol} ]`;
    const lowerMap = `[ ${lowerSymbol} ]`;
    return [upperMap, lowerMap];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#turn = 0;
    this.#map = [[], []];
  }
}

module.exports = BridgeGame;
