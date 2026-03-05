(function executeRule(current, previous /*null when async*/) {

    const currentState = current.getDisplayValue('state');
    const previousState = previous.getDisplayValue('state');

    gs.addInfoMessage(`State updated from '${previousState}' to '${currentState}'`);

})(current, previous);