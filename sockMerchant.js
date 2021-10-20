


function getSocksPairs2(socksArray){
  //socks array = [10,10,20,30,20,10, 5];
  //We create a hashMap to store the key value values
  let socksHashMap = {} // {'1':2, '3':1, '4':2} ...
  let totalPairsNum = 0;

  socksArray.forEach((sockColor) => {

    console.log("socksHashMap[sockColor] -> ", socksHashMap[sockColor], "for =>",sockColor)
    //If the hash does not exist, set it to 1 and continue, in case it already exists, it will add 1
      if (!socksHashMap[sockColor]) {
        socksHashMap[sockColor] = 1;
        return ;
      }
      totalPairsNum++;
      // with this line we achieve that if there is another hash value for 10 for example, it will be counted again.
      // with delete, we can delete a property of an object, accessing to it and eliminating it of the face of the world.
      delete socksHashMap[sockColor];
  });

  return totalPairsNum;

}

//There is even a third method which can be used with this solution
function sockMerchant(ar) {

  let sortedAr = ar.sort((a,b)=> a-b);
  console.log(sortedAr) //
it is not necessary to sort asc because we only need to stick the equal values together.
      // with this line we achieve that if there is another hash value for 10 for example, it will be counted again.

  let pairs = 0;
  for (let i = 0; i < sortedAr.length - 1; i++){

    console.log("[i]",sortedAr[i])
    console.log("[i+1]",sortedAr[i+1])

    if (sortedAr[i] == sortedAr[i+1]){
      console.log("same values, 1+ pair")
      pairs++;
      i++;
    }

  }
  return pairs
}

//Sorting by name

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
]

//these functions work because they call themselves
items.sort(function(a,b) {
  if (a.name > b.name) return 1
  if (b.name > a.name) return -1
  return 0
})

const itemsSortedByValue = items.sort(function(a,b) {
  if (a.value > b.value) return 1
  if (b.value > a.value) return -1
  return 0
})


const input = [10,10,20,30,20,10, 5];
const sortedInput = [5,10,10,10,20,20,30]
const expectedOutput = 2;


console.log(getSocksPairs2(input));
