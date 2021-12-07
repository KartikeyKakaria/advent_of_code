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
        let aim = 0;
        let depth = 0;
        let horizontal_position=0;
        //iterating values
        array.forEach((element,index)=>{
            //if the element contains forward, down or up ;find the first char of the next element which is its value
            //and then add the value to your respective variable
            if(element.includes("forward")){
                let first = array[index+1];
                let number = Number(first[0]);
                horizontal_position+=number;
                let add = aim*number;
                depth+=add;
                
            }
            if(element.includes("down")){
                let first = array[index+1];
                let number = Number(first[0]);
                //  console.log(number);
                aim+=number;
            }
            if(element.includes("up")){
                let first = array[index+1];
                let number = Number(first[0]);
                // console.log(number);
                aim-=number;
            }
        })
        //calculate the result
        // const result = (down-up)*forward;
        console.log(horizontal_position*depth);
    })
    .catch(err => console.log(err))
}