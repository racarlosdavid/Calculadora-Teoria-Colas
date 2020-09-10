export class MGKBloqueado {
    lambda:number;
    mu:number;
    K:number

    constructor(lambda:number, mu:number, K:number){
        this.lambda = lambda;
        this.mu = mu;
        this.K = K;
    }

    capacidad():string{ 
        if(this.ro() < 1)
            return "si";
        return "no";
    }

    ro():number{
        return this.lambda/(this.K*this.mu);
    }

    Pj(j:number):number{
        let sumatoria = 0
        for (let i = 0; i < this.K+1; i++) {
            sumatoria += ((this.lambda/this.mu)**i)/this.factorial(i);
        }    
        
        return (((this.lambda/this.mu)**j)/this.factorial(j))/sumatoria;
    }

    factorial(n:number):number {
        let fac = 1
        for (let i = 1; i < n+1; i++) {
            fac = fac * i;
        }
        return fac;
    }
    
}