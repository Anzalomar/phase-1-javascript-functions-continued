// code your solution here
// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression for mondayWork
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function wrapAdjective
  function wrapAdjective(highlight = "*") {
    return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  
  // Tests to verify the functions work correctly
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."
  const wrapWithStars = wrapAdjective("*");
  console.log(wrapWithStars("a hard worker")); // "You are *a hard worker*!"
  const wrapWithBars = wrapAdjective("||");
  console.log(wrapWithBars("a dedicated programmer")); // "You are ||a dedicated programmer||!"
  