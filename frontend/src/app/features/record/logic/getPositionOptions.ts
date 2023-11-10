
export const getPositionOptions = (count: string) => {
  switch (count) {
    case '2':
      return ['BTN', 'BB'];
    case '3':
      return ['BTN', 'SB', 'BB'];
    case '4':
      return ['UTG', 'BTN', 'SB', 'BB'];
    case '5':
      return ['UTG', 'CO', 'BTN', 'SB', 'BB'];
    case '6':
      return ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
    case '7':
      return ['UTG', 'UTG1', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
    case '8':
      return ['UTG', 'UTG1', 'UTG2', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
    case '9':
      return ['UTG', 'UTG1', 'UTG2', 'LO', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
    default:
      return ['UTG', 'UTG1', 'UTG2', 'LO', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
  }
};