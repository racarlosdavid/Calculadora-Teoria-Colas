function mm1_infinito(){
    
    console.log("-> Modelo MM1");
    try { 
        let mm1_λ = document.getElementById("mm1_λ").value;
        let mm1_μ = document.getElementById("mm1_μ").value;
    

    }
    catch (err) {
        console.log(err);
      
    }

}

function mmk(){
    console.log("-> Modelo MMK ");
    try { 
        let mmk_λ = document.getElementById("mmk_λ").value;
        let mmk_μ = document.getElementById("mmk_μ").value;    
        let mmk_K = document.getElementById("mmk_K").value;  
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
    }
    catch (err) {
        console.log(err);
      
    }
}

