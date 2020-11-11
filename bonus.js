/*
1. Debug and fix the code below. Analyze the code carefully to determine what it is supposed to do.

function squaed(b) {
  return a * a;
}
*/

function squaed(b) {
    return a * a;
  }

/*
2. Using the && operator, consider the following below:

Consider a && b

    -a is checked if it is true or false
    -If a is false, false is returned
    -b is checked if it is true or false.
    -If b is false, false is returned.
    -Otherwise, true is returned (as both a and b are therefore true )
*/
function and(a, b) {
    if(a && b){
        const isNow = true;
        return isNow;
    } else{
        const nowIs = false;
        return nowIs;
    }
}


/*
3. Given the inputs true and false, fix the code below:

    function has_bugs(buggy_code) {
    if (buggyCode) {
        return 'sad days'
    } else if {
        return 'it's a good day'
        }
    }
*/
function has_bugs(buggy_code) {
    if (buggy_code) {
        const answer1 = 'sad days'
        return answer1
    } else {
        const answer2 = "it's a good day"
        return answer2
        }
    }



// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise
function dividesEvenly(a, b) {
    if(){
        const even = true;
        return even;
    } else {
        const odd = false;
        return odd;
    }
}