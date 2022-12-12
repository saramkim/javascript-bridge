const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(app) {
    Console.readLine('다리의 길이를 입력해주세요.', (input) => {
      try {
        Validator.validateBridgeSize(input);
        app.make(input);
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize(app);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(app) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (input) => {
      try {
        Validator.validateMoving(input);
        app.move(input);
      } catch (error) {
        Console.print(error.message);
        this.readMoving(app);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
