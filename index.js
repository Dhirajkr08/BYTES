function BubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let d=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=d
            }
        }
        

    }
    return arr
}
function main(){
    let arr=[2,5,1,4,3]
    console.log(BubbleSort(arr))
}
main()