export class MM1Finito {
    lambda:number;
    mu:number;
    N:number;

    constructor(lambda:number, mu:number, N:number){
        this.lambda = lambda;
        this.mu = mu;
        this.N = N;
    }

    capacidad():string{
        if(this.lambda < this.mu)
            return "si";
        return "no";
    }

    p0():number{
        let sumatoria = 0
        for (let i = 0; i < this.N+1; i++) {
            sumatoria += (this.factorial(this.N)/this.factorial(this.N-i)) * ((this.lambda/this.mu)**i);
        }    
        return 1/sumatoria
    }
    
    factorial(n:number):number {
        let fac = 1
        for (let i = 1; i < n+1; i++) {
            fac = fac * i;
        }
        return fac;
        
    }

    Lq():number{
        return this.N - (((this.lambda+this.mu)/this.lambda)*(1-this.p0()));
    }

    L():number{
        return this.Lq() + (1-this.p0());
    }
    
    Wq():number{
        return this.Lq()/((this.N-this.L())*this.lambda);
    }

    W():number{
        return this.Wq() + (1/this.mu);
    }

    Pn(n:number):number{
        return (this.factorial(this.N)/this.factorial(this.N-n)) * ((this.lambda / this.mu) ** n) * this.p0();
    }

    Pw():number{
        return 1 - this.p0();
    }
}