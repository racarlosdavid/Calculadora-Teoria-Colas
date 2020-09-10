import { MM1Finito } from "./MM1Finito";
import { MMK } from "./MMK";
import { MG1 } from "./MG1";

//-------------> MODELO MMK

let mmk_λ = 2;   
let mmk_μ = 3;     
let mmk_K = 2;      

let modelo_mmk = new MMK(mmk_λ,mmk_μ,mmk_K);
console.log(" Caracteristicas Operativas de Sistema - MODELO MM1 Finito");
console.log(" El sistema tiene capacidad "+modelo_mmk.capacidad());
console.log(" ρ = "+modelo_mmk.ro());
console.log(" Po = "+modelo_mmk.p0());
console.log(" Lq = "+modelo_mmk.Lq());
console.log(" L = "+modelo_mmk.L());
console.log(" Wq = "+modelo_mmk.Wq());
console.log(" W = "+modelo_mmk.W());
console.log(" Pw = "+modelo_mmk.Pw());
console.log("\n");
     
//-------------> MODELO MG1

let mg1_λ = 0.35;   
let mg1_μ = 0.5;     
let mg1_σ = 1.2;      

let modelo_mg1 = new MG1(mg1_λ,mg1_μ,mg1_σ);
console.log(" Caracteristicas Operativas de Sistema - MODELO MG1");
console.log(" El sistema tiene capacidad "+modelo_mg1.capacidad());
console.log(" ρ = "+modelo_mg1.ro());
console.log(" Po = "+modelo_mg1.p0());
console.log(" Lq = "+modelo_mg1.Lq());
console.log(" L = "+modelo_mg1.L());
console.log(" Wq = "+modelo_mg1.Wq());
console.log(" W = "+modelo_mg1.W());
console.log(" Pw = "+modelo_mg1.Pw());
console.log("\n");

//-------------> MODELO MM1 FINITO
let mm1_f_λ = 0.05;   
let mm1_f_μ = 0.5;    
let mm1_f_N = 6;      
let mm1_f_K = 1; 

let modelo_mm1finito = new MM1Finito(mm1_f_λ,mm1_f_μ,mm1_f_N,mm1_f_K);
console.log(" Caracteristicas Operativas de Sistema - MODELO MM1 Finito");
console.log(" El sistema tiene capacidad "+modelo_mm1finito.capacidad());
console.log(" Po = "+modelo_mm1finito.p0());
console.log(" Lq = "+modelo_mm1finito.Lq());
console.log(" L = "+modelo_mm1finito.L());
console.log(" Wq = "+modelo_mm1finito.Wq());
console.log(" W = "+modelo_mm1finito.W());
console.log(" Pn = "+modelo_mm1finito.Pn(4)); //Le mando la n unidads que quiero saber la probabilidad que que esten en el sistema
console.log(" Pw = "+modelo_mm1finito.Pw());
console.log("\n");


