//This is the first exercise in chapter 4 (Objects and data structures)
// of Eloquent Javascript

function range(start, end, step){
    let answer = [];
    let st = start;
    let en = end;
    let sp = step;

    answer.push(st);
    if (sp == undefined){
        sp = 1;
    }
    while(st < en){
        st = st + sp;
        if(st < en){
            answer.push(st);
        }
        
    }
    console.log(answer);
}

range(1, 10, 3);

function sum(start, end){
    let answer = [];
    let st = start;
    let en = end;
    answer.push(st);
    while(st < en){
        st = st + 1;
        answer.push(st);
    }

    function add(a, b){
        return a + b;
    }
    answer = answer.reduce(add, 0);
    console.log(answer);
    
}

sum(1, 10);

