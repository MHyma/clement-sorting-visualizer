// export const mergeSort =array => {
//     if(array.length==1) return array;
//     const middleIdx= Math.floor(array.length/2);
//     const fisrtHalf=mergeSort(array.slice(0,middleIdx));
//     const secondHalf=mergeSort(array.slice(middleIdx));
//     const sortedArray=[];
//     let i=0,
//     j=0;
//     while(i<fisrtHalf.length && j<secondHalf.length){
//         if(fisrtHalf[i]<secondHalf[j]){
//             sortedArray.push(fisrtHalf[i]);
//             i++;
//         }else{
//             sortedArray.push(secondHalf[j]);
//             j++;
//         }
//     }
//     while(i<fisrtHalf.length){
//         sortedArray.push(fisrtHalf[i]);
//         i++;
//     }
//     while(j<secondHalf.length){
//         sortedArray.push(secondHalf[j]);
//         j++;
//     }
//     return sortedArray;
// }

export  function getMergeSortAnimations(array){
    const animations = [];
    if(array.length<=1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array,0,array.length-1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
    ){
        if(startIdx===endIdx) return;
        const middleIdx= Math.floor((startIdx+endIdx)/2);
        mergeSortHelper(auxiliaryArray,startIdx,middleIdx,mainArray,animations);
        mergeSortHelper(auxiliaryArray,middleIdx+1,endIdx,mainArray,animations);
        doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
){
    let k=startIdx;
    let i=startIdx;
    let j=middleIdx+1;
    while(i<=middleIdx && j<=endIdx){
        animations.push([i,j]);
        animations.push([i,j]);

        // const animation={};
        // animation.comparison =[i,j];
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            // animation.swap=[k,i];
            animations.push([k,auxiliaryArray[i]]);
            mainArray[k++]=auxiliaryArray[i++];
        }else{
            // animation.swap=[k,j];
            animations.push([k,auxiliaryArray[j]]);
            mainArray[k++]=auxiliaryArray[j++];
        }
      //  animations.push(animation);
    }
    while(i<=middleIdx){
        // animations.push({
        //     comparison:[i,j],
        //     swap:[k,i],

        // });
        // These are the values  that we're comparing; we push them once
        // to change color
        animations.push([i,i]);
        // These are the values that we're comparing; we push them second
        // time to revert their color
        animations.push([i,i]);
        // we overwrite the value at index k in the original array with the
        // value at index i in the auxiliary  array.
        animations.push([k,auxiliaryArray[i]]);
        mainArray[k++]=auxiliaryArray[i++];
    }
    while(j<=endIdx){
        // animations.push({
        //     comparison:[j,j],
        //     swap:[k,j],
        // });
         // These are the values  that we're comparing; we push them once
        // to change color
        animations.push([j,j]);
        // These are the values that we're comparing; we push them second
        // time to revert their color
        animations.push([j,j]);
        // we overwrite the value at index k in the original array with the
        // value at index i in the auxiliary  array.
        animations.push([k,auxiliaryArray[j]]);
        mainArray[k++]=auxiliaryArray[j++];
    }
}

// export  function getQuickSortAnimations(array){
//     const animations = [];
//     if(array.length<=1) return array;
//     quickSortHelper(array,0,array.length-1, animations);
//     return animations;
// }

// function quickSortHelper(
//     array,
//     startIdx,
//     endIdx,
//     animations
// ){
//     if(startIdx===endIdx) return;
//     if(startIdx<endIdx){
//        var p= doQuickSort(array,startIdx,endIdx,count,animations);
//        quickSortHelper(array,startIdx,p-1,animations);
//        quickSortHelper(array,p+1,endIdx,animations);
//     }
// }

// function doQuickSort(
//     array,
//     startIdx,
//     endIdx,
//     animations
// ){
//     let k=startIdx;
//     let i=startIdx+1;
//     let j=endIdx;
//     let count =0;
//     while(i<=j){
//         animations.push([i,j]);
//         animations.push([i,j]);
//         while(i<=j && array[i]<=array[startIdx]){

//             i++;
//         }
//         while(j>=i && array[j]>array[startIdx]){
//             j--;
//         }
//         if(i<j){
//             swap(array,i,j);
//         }
//     }
//     swap(array,startIdx,j);
//     return j;

// }

// export function quickSort (array) {

//     getQuickSort(0,array.length-1,array);
// }

// function getQuickSort(startIdx,endIdx,array){
//     if(startIdx<endIdx){
//         var p = partition(array,startIdx,endIdx);
//         getQuickSort(startIdx,p-1,array);
//         getQuickSort(p+1,endIdx,array);
//     }
// }

// function partition(array,startIdx,endIdx){
//     let l=startIdx+1;
//     let h=endIdx;
//     while(l<=h){
//         while(l<=h && array[l]<=array[startIdx]){
//             l++;
//         }
//         while(h>=l && array[h]>array[startIdx]){
//             h--;
//         }
//         if(l<h){
//             let tmp=array[l];
//             array[l]=array[h];
//             array[h]=tmp;
//         }
//     }
//     let tmp=array[startIdx];
//     array[startIdx]=array[h];
//     array[h]=tmp;
//     return h;
// }

export const quickSort =array => {
    if(array.length===1) return array;
    const startIdx=0;
    const endIdx=array.length-1;
    const sortedArray=[];
    if(startIdx < endIdx){
        const p= partition(array,startIdx,endIdx);
         const fisrtHalf=quickSort(array.slice(0,p-1));
         const secondHalf=quickSort(array.slice(p+1));
         sortedArray.push(secondHalf);
    sortedArray.push(fisrtHalf)
    }
   
    
    return sortedArray;
}
function partition(array,startIdx,endIdx){
    let l=startIdx+1;
    let h=endIdx;
    while(l<=h){
        while(l<=h && array[l]<=array[startIdx]){
            l++;
        }
        while(h>=l && array[h]>array[startIdx]){
            h--;
        }
        if(l<h){
            let tmp=array[l];
            array[l]=array[h];
            array[h]=tmp;
        }
    }
    let tmp=array[startIdx];
    array[startIdx]=array[h];
    array[h]=tmp;
    return h;
}