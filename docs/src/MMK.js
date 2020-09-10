class MMK {
    constructor(lambda, mu, K) {
        this.lambda = lambda;
        this.mu = mu;
        this.K = K;
    }
    capacidad() {
        if (this.ro() < 1)
            return "si";
        return "no";
    }
    ro() {
        return this.lambda / (this.K * this.mu);
    }
    p0() {
        let sumatoria = 0;
        for (let i = 0; i < this.K; i++) {
            sumatoria += ((Math.pow((this.lambda / this.mu), i)) / this.factorial(i));
        }
        return 1 / (sumatoria + (((Math.pow((this.lambda / this.mu), this.K)) / this.factorial(this.K)) * ((this.K * this.mu) / ((this.K * this.mu) - this.lambda))));
    }
    factorial(n) {
        let fac = 1;
        for (let i = 1; i < n + 1; i++) {
            fac = fac * i;
        }
        return fac;
    }
    Lq() {
        return (((Math.pow((this.lambda / this.mu), this.K)) * this.lambda * this.mu) / (this.factorial(this.K - 1) * (Math.pow(((this.K * this.mu) - this.lambda), 2)))) * this.p0();
    }
    L() {
        return this.Lq() + (this.lambda / this.mu);
    }
    Wq() {
        return this.Lq() / this.lambda;
    }
    W() {
        return this.Wq() + (1 / this.mu);
    }
    /*
        Pn(n:number):number{
            
        }
    */
    Pw() {
        return (1 / this.factorial(this.K)) * (Math.pow((this.lambda / this.mu), this.K)) * ((this.K * this.mu) / ((this.K * this.mu) - this.lambda)) * this.p0();
    }
}
