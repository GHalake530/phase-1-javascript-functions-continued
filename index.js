function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    //const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;

  }
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
    //const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`;

  }
  function wrapAdjective(highlight = "*") {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
    //const wrapAdjective = (highlight = "*") => (adjective) => `You are ${highlight}${adjective}${highlight}!`;
  }