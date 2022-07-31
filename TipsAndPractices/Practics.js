const sequence = [10, 1, 2, 3, 4, 5];

function solution(sequence) {
    
    for(let i = 0; i < sequence.length; i++) {
        
        if(sequence[i] >= sequence[i + 1]){
            
            if(sequence[i + 1] <= sequence[i - 1]){
                   sequence.splice(i + 1, 1);
                   break;
            }
            
            sequence.splice(i, 1);
            break;
            
        }
        
    }
    
    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] >= sequence[i + 1]){
            return false
        }
    }
    
    return true;
}

console.log(solution(sequence));