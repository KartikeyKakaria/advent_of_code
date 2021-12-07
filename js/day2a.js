window.onload = ()=>{
    const params = {
        method:"get",
       
    }
    let numbers = "";
    //getting input
    fetch("input2.txt", params)
    .then(response => response.text())
    .then((data)=>{
        
        // console.log(data)
        //converting to an array
        const array = data.split(" ");
        // console.log(array);
        //assigning variables
        let forward = 0;
        let up = 0;
        let down =0;
        //iterating values
        array.forEach((element,index)=>{
            //if the element contains forward, down or up ;find the first char of the next element which is its value
            //and then add the value to your respective variable
            if(element.includes("forward")){
                let first = array[index+1];
                let number = Number(first[0]);
                // console.log(number);
                forward+=number;
            }
            if(element.includes("down")){
                let first = array[index+1];
                let number = Number(first[0]);
                //  console.log(number);
                down+=number;
            }
            if(element.includes("up")){
                let first = array[index+1];
                let number = Number(first[0]);
                // console.log(number);
                up+=number;
            }
        })
        //calculate the result
        const result = (down-up)*forward;
        console.log(result);
    })
    .catch(err => console.log(err))
}