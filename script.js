function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost = 0;

	  while (arr.length > 1) {
	    // sort array
	    arr.sort((a, b) => a - b);
	
	    // take two smallest
	    let first = arr.shift();
	    let second = arr.shift();
	
	    let sum = first + second;
	    cost += sum;
	
	    // push back combined rope
	    arr.push(sum);
  }

  return cost;
  
}

module.exports=mincost;
