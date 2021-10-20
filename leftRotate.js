// We need to do a left rotation from an array

function rotateArrayLeft(arr, rotations){

    //We need to extract the first value of the array every rotation and pushed to a new array ordered.
    const rotatedArray = arr.concat(); //Clonamos un array in a fancy way

    for (let i = 0; i < rotations; i++) {
      const firstItem = rotatedArray.shift();
      //Ahora el rotared array queda con todos los elementos sin su primero numero.
      //Ahora solamente lo anadimos al final.
      rotatedArray.push(firstItem);
    }

    return rotatedArray;
}

const numRotations = 2;
const input = [1,2,3,4,5];
//expected output if numRotations = 1
const expectedOutput = [2,3,4,5,1];

//expected output if numRotations = 2
const expectedOutput2 = [3,4,5,1,2];

console.log(rotateArrayLeft(input, numRotations));
