//1.1) Determine the Big O for the following algorithm: 
//You are sitting in a room with 15 people. 
//You want to find a playmate for your dog, preferably of the same breed. 
//So you want to know if anyone out of the 15 people have the same breed 
//as your dog. You stand up and yell out, who here has a golden retriever 
//and would like to be a playdate for my golden. Someone yells - "I do, be 
//happy to bring him over"  
// --  0(1) -constant because you are asking directly who has the same dog


// 1.2) You start with the first person and ask him if he has a golden 
//retriever. He says no, then you ask the next person, and the next, and 
//the next until you find someone who has a golden or there is no one else 
//to ask.
//  O(n)  Linear because you are going to each person and asking them

// 2) O(1)  constant because its just doing aritmatic 

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}


//3) O(n^2) quadradic because it is a nested loop
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// 4) O(n)  Linear becaust its run time is dependant on the size of the array

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// 5)   O(n)  Linear becaust its run time is dependant on the size of the array

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// 6)  O(n^2) quadradic because it is a nested loop

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " +  arr[j] );
    }
  }
}

//7 ) O(n)  Linear becaust its run time is dependant on the size of the array
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i == 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// 8) O(Logn) Logarithmic  because it divides the array in half each time

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// 9) O(1) constant because its going directly to the memory slot in the array

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 10) O(n) beacuse it is going through a loop, checking if n is a prime number
function isWhat(n) {
  if (n < 2 || n % 1 != 0) { 
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isWhat(11))

// 11) 


//If you are given 5 disks, how do the rods look like after 7 recursive 
//calls?   3 of them are at destination and 2 at the start point

//How many moves are needed to complete the puzzle with 3 disks? 
// with 4 disks? with 5 disks?   with 3 disk 7 moves are needed/ with 5 disk 29 moves

//What is the runtime of your algorithm?

//Derive an algorithm to solve the Tower of Hanoi puzzle.
function hanoi(disk , start, destination, staging){
    if (disk == 1) {
        // base case of 1 disk, we know how to solve that
        console.log("Move disk 1 from post " + start + " to post " + destination);
        
    } else {
        // first solve for all except the last disk
        hanoi(disk - 1, start, staging, destination);
        
        // now move the last disk
        console.log("Move disk " + disk  + " from post " + start + " to post " +
        destination );
        
        // now solve for the remaining disks
        hanoi(disk - 1, staging, destination, start);
        
    }}
    
    //Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
    console.log(hanoi(4, 'a', 'c', 'b'))