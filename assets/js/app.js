export default {  
    data() {  
        return {  
            number : 0 ,
            animal : "Dogs",
            numbers : [12, 35, 56, 67, 42, 93],
            allLi : []
        }  
    },  
    methods : {  
        addOne()
        {
	        this.number = this.number + 1;
        },
        rmvOne()
        {
	        this.number = this.number - 1;
        },
        double()
        {
            this.number = this.number * 2;
        },
        dogs()
        {
            this.animal = "Dogs";
        },
        cats()
        {
            this.animal = "Cats";
        },
        addList()
        {
            const tachesup = document.getElementById("addAtList");
            allLi.push(tachesup.value);
            console.log(tachesup.value);
        }
    }  
}