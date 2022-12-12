const Validator = {
  validateBridgeSize(input) {
    if (isNaN(input))
      throw new Error('[ERROR] 다리 길이는 숫자를 입력해야 합니다.');
    if (input < 3 || input > 20)
      throw new Error('[ERROR] 다리 길이는 3이상 20이하의 숫자여야 합니다.');
  },

  validateMoving(input) {
    if (input === 'u' || input === 'd')
      throw new Error('[ERROR] 이동할 칸은 대문자를 입력해야 합니다.');
    if (input !== 'U' && input !== 'D')
      throw new Error('[ERROR] 이동할 칸은 U 혹은 D를 입력해야 합니다.');
  },
};

module.exports = Validator;
