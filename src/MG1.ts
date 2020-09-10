export class MG1 {
    lambda:number;
    mu:number;
    sigma:number

    constructor(lambda:number, mu:number, sigma:number){
        this.lambda = lambda;
        this.mu = mu;
        this.sigma = sigma;
    }

    capacidad():string{ 
        if(this.ro() < 1)
            return "si";
        return "no";
    }

    ro():number{
        return this.lambda/this.mu;
    }

    p0():number{
        return 1 - (this.lambda/this.mu);
    }

    Lq():number{
        return (((this.lambda**2) * (this.sigma**2)) + ((this.lambda/this.mu)**2) )/ (2*(1-(this.lambda/this.mu)))
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

    Pw():number{
        return this.lambda/this.mu;
    }
    
}