export class MMK {
    lambda:number;
    mu:number;
    K:number

    constructor(lambda:number, mu:number, K:number){
        this.lambda = lambda;
        this.mu = mu;
        this.K = K;
    }

    capacidad():string{ //ρ
        if(this.ro() < 1)
            return "si";
        return "no";
    }

    ro():number{
        return this.lambda/(this.K*this.mu);
    }

    p0():number{
        let sumatoria = 0
        for (let i = 0; i < this.K; i++) {
            sumatoria += ( (this.lambda / this.mu) ** i) / this.factorial(i)
        }    
        
        return 1/(sumatoria + (((this.lambda/this.mu) ** this.K) / this.factorial(this.K)) * ((this.K*this.mu)/this.K*this.mu-this.lambda));
    }
    
    factorial(n:number):number {
        let fac = 1
        for (let i = 1; i < n+1; i++) {
            fac = fac * i;
        }
        return fac;
        
    }

    Lq():number{
        return ((((this.lambda/this.mu) ** this.K) * this.lambda * this.mu ) / (this.factorial(this.K -1) * ( ((this.K*this.mu)-this.lambda)**2)) ) * this.p0();
    }

    L():number{
        return this.Lq() + (this.lambda/this.mu);
    }
    
    Wq():number{
        return this.Lq()/this.lambda;
    }

    W():number{
        return this.Wq() + (1/this.mu);
    }
/*
    Pn(n:number):number{
        
    }
*/
    Pw():number{
        return (1/this.factorial(this.K)) * ((this.lambda/this.mu)**this.K) * ((this.K*this.mu)/((this.K*this.mu)-this.lambda)) * this.p0();
    }
    
}