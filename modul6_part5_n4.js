function func(begin, end) {
  let current = begin;
  
  
  const intervalId = setInterval(function() {
    console.log(current);
    if (current == end) {
        clearInterval(intervalId);
    }
    else {
		current ++;
    }}, 1000, current);
  
}


func(1,5);
