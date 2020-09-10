export class MM1 {
    lambda:number;
    mu:number;

    constructor(lambda:number, mu:number){
        this.lambda = lambda;
        this.mu = mu;
    }

    capacidad():string{ //ρ
        if(this.ro() < 1)
            return "si";
        return "no";
    }

    ro():number{
        return 0
    }

    p0():number{
        return 1 - (this.lambda/this.mu);
    }

    Lq():number{
       return  (this.lambda**2)/(this.mu*(this.mu-this.lambda));
    }

    L():number{
        return this.Lq() +(this.lambda/this.mu);
     }
    
    Wq():number{
        return this.Lq()/this.lambda;
    }

    W():number{
        return this.Wq() + (1/this.mu);
    }

    Pn(n:number):number{
        return ((this.lambda/this.mu)**n)*this.p0();
    }

    Pw():number{
        return this.lambda/this.mu
    }
    
}