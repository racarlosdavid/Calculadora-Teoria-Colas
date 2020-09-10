export class MM1 {
    lambda:number;
    mu:number;

    constructor(lambda:number, mu:number){
        this.lambda = lambda;
        this.mu = mu;
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
        return this.lambda/this.mu;
    }

    P_Wq_mayor(t:number):number{
        return (this.lambda/this.mu)*(Math.E**(-this.mu*t*(1-(this.lambda/this.mu))));
    }

    P_w_mayor(t:number):number{
        return Math.E**(-this.mu*t*(1-(this.lambda/this.mu)));
    }
    
}