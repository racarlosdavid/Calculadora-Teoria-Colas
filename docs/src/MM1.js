class MM1 {
    constructor(lambda, mu) {
        this.lambda = lambda;
        this.mu = mu;
    }
    capacidad() {
        if (this.ro() < 1)
            return "si";
        return "no";
    }
    ro() {
        return 0;
    }
    p0() {
        return 1 - (this.lambda / this.mu);
    }
    Lq() {
        return (Math.pow(this.lambda, 2)) / (this.mu * (this.mu - this.lambda));
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
    Pn(n) {
        return (Math.pow((this.lambda / this.mu), n)) * this.p0();
    }
    Pw() {
        return this.lambda / this.mu;
    }
}
