export class MMK {
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

    p0():number{
        let sumatoria = 0
        for (let i = 0; i < this.K; i++) {
            sumatoria += (( (this.lambda/this.mu) ** i) / this.factorial(i));
        }    
        
        return 1/(sumatoria + ((((this.lambda/this.mu) ** this.K) / this.factorial(this.K)) * ((this.K*this.mu)/((this.K*this.mu)-this.lambda))));
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

    Pn(n:number):number{
        let res:number = 0;
        if (n <= this.K) {
            res = (((this.lambda/this.mu)**n)/this.factorial(n))*this.p0();
        } else if (n > this.K){
            res = (((this.lambda/this.mu)**n)/(this.factorial(this.K)*(this.K**(n-this.K)))) * this.p0();
        }
        return res;
        
    }

    Pw():number{
        return (1/this.factorial(this.K)) * ((this.lambda/this.mu)**this.K) * ((this.K*this.mu)/((this.K*this.mu)-this.lambda)) * this.p0();
    }

    P_Wq_igual(n:number):number{
        let sumatoria = 0
        for (let i = 0; i < this.K; i++) {
            sumatoria += this.Pn(n);
        } 
        return sumatoria;
    }

    P_Wq_mayor(n:number, t:number):number{
        return (1-this.P_Wq_igual(n))*(Math.E**((-this.K*this.mu*t)*(1-(this.lambda/(this.K*this.mu)))));
    }
    
    P_w_mayor(t:number):number{ //lo de los corchetes no forma parte del exponencial
        //return (Math.E**(-this.mu*t))*(1+((((this.lambda/this.mu)**this.K)*this.p0()*(1-(Math.E**(-this.mu*t*(this.K-1-(this.lambda/this.mu))))))/(this.factorial(this.K)*(1-(this.lambda/(this.K*this.mu)))*(this.K-1-(this.lambda/this.mu)))))
       
        //lo de los corchetes forma parte 
        return (Math.E**(-this.mu*t*(1+((((this.lambda/this.mu)**this.K)*this.p0()*(1-(Math.E**(-this.mu*t*(this.K-1-(this.lambda/this.mu))))))/(this.factorial(this.K)*(1-(this.lambda/(this.K*this.mu)))*(this.K-1-(this.lambda/this.mu)))))))
    }
}