import React from "react";
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS= 50;
const NUMBER_OF_ARRAY_BARS=10;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({ array });
    }

    // testSortingAlgorithms(){
    //     for(let i=0;i< 100;i++){
    //         const array=[];
    //         const length= randomIntFromInterval(1,1000);
    //         for(let i=0;i<length;i++){
    //             array.push(randomIntFromInterval(-1000,1000));
    //         }
    //         const javascriptSortedArray= array.slice().sort((a,b)=> a-b);
    //         const sortedArray= getMergeSortAnimations(array.slice());
    //         console.log(arraysAreEqual(javascriptSortedArray,sortedArray));
    //     }
    // }
    // mergeSort() {
    //     const javascriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    //     const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

    //     console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
    // }
    mergeSort() {
        const animations= getMergeSortAnimations(this.state.array);
        // const newAnimations = [];
        // for(const animation of animations){
        //     newAnimations.push(animation.comparison);
        //     newAnimations.push(animation.comparison);
        //     newAnimations.push(animation.swap);
        // }
        for(let i=0;i<animations.length;i++){
            const arrayBars=document.getElementsByClassName('array-bar');
            const isColorChange= i%3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle =  arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i% 3 ===0? 'blue':'pink';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i* ANIMATION_SPEED_MS);
            }else{
                setTimeout(()=>{
                    const [barOneIdx,newHeight]=animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height= `${newHeight}px`;
                },i*ANIMATION_SPEED_MS);
            }
        }
        // const javascriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

        // console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
    }

    quickSort() {
        // const animations= getQuickSortAnimations(this.state.array);
      
        // for(let i=0;i<animations.length;i++){
        //     const arrayBars=document.getElementsByClassName('array-bar');
        //     const isColorChange= i%3 !== 2;
        //     if(isColorChange){
        //         const [barOneIdx, barTwoIdx] = animations[i];
        //         const barOneStyle =  arrayBars[barOneIdx].style;
        //         const barTwoStyle = arrayBars[barTwoIdx].style;
        //         const color = i% 3 ===0? 'blue':'pink';
        //         setTimeout(()=>{
        //             barOneStyle.backgroundColor = color;
        //             barTwoStyle.backgroundColor = color;
        //         }, i* ANIMATION_SPEED_MS);
        //     }else{
        //         setTimeout(()=>{
        //             const [barOneIdx,newHeight]=animations[i];
        //             const barOneStyle = arrayBars[barOneIdx].style;
        //             barOneStyle.height= `${newHeight}px`;
        //         },i*ANIMATION_SPEED_MS);
        //     }
        // }
        const javascriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.quickSort(this.state.array);
        console.log(javascriptSortedArray.length);
        console.log(sortedArray.length);
        console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
    }

    render() {
        const { array } = this.state;
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
                    </div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}