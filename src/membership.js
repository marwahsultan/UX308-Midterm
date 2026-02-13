// Write a function that calculates total cost of a gym membership. A member gets a
// discount according to the number of friends they sign up.

export function membership(friends){

    if(friends == 0){
        return "0%";
    }
    else if(friends == 1){
        return "5%";
    }
    else if(friends == 2){
        return "10%";
    }
    else{
        return "15%";
    }
}

if(import.meta.main){
    console.log(`membership(6) returns ${membership(6)}`);
}