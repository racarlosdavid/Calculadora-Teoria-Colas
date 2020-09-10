function mm1_infinito(){
    
    console.log("-> Modelo M/M/1 INFINITO");
    try { 
        let mm1_λ = Number(document.getElementById("mm1_λ").value);
        let mm1_μ = Number(document.getElementById("mm1_μ").value);
        let mm1_n = document.getElementById("mm1_n").value;
        let mm1_t = document.getElementById("mm1_t").value;
        
        

        let modelo_mm1 = new MM1(mm1_λ,mm1_μ);
        let salida = "";
        salida += " Caracteristicas Operativas de Sistema - MODELO MM1 Infinito"+"\n";
        salida += " El sistema tiene capacidad: "+modelo_mm1.capacidad()+"\n";
        salida += " ρ = "+modelo_mm1.ro()+"\n";
        salida += " Po = "+modelo_mm1.p0()+"\n";
        salida += " Lq = "+modelo_mm1.Lq()+"\n";
        salida += " L = "+modelo_mm1.L()+"\n";
        salida += " Wq = "+modelo_mm1.Wq()+"\n";
        salida += " W = "+modelo_mm1.W()+"\n";
        salida += " Pw = "+modelo_mm1.Pw()+"\n";
        if (mm1_n=="") {
        } else {
            mm1_n = Number(document.getElementById("mm1_n").value);
            salida += " Pn = "+modelo_mm1.Pn(mm1_n)+"\n";
        }
        if (mm1_t=="") {
        } else {
            mm1_t = Number(document.getElementById("mm1_t").value);
            salida += " P(Wq > t) = "+modelo_mm1.P_Wq_mayor(mm1_t)+"\n";
            salida += " P(W > t) = "+modelo_mm1.P_w_mayor(mm1_t)+"\n";
        }
        salida += "\n";

        let tempo = textMap.get("code_mm1");    //Obtengo el textarea de la pestaña
        tempo.setValue(salida);
    }
    catch (err) {
        console.log(err);
      
    }

}

function mmk(){
    console.log("-> Modelo M/M/K ");
    try { 
        let mmk_λ = Number(document.getElementById("mmk_λ").value);
        let mmk_μ = Number(document.getElementById("mmk_μ").value);    
        let mmk_K = Number(document.getElementById("mmk_K").value);  
        let mmk_n = document.getElementById("mmk_n").value;
        let mmk_t = document.getElementById("mmk_t").value;
        

        let modelo_mmk = new MMK(mmk_λ,mmk_μ,mmk_K);

        let salida = "";
        salida += " Caracteristicas Operativas de Sistema - MODELO MMK"+"\n";
        salida += " El sistema tiene capacidad: "+modelo_mmk.capacidad()+"\n";
        salida += " ρ = "+modelo_mmk.ro()+"\n";
        salida += " Po = "+modelo_mmk.p0()+"\n";
        salida += " Lq = "+modelo_mmk.Lq()+"\n";
        salida += " L = "+modelo_mmk.L()+"\n";
        salida += " Wq = "+modelo_mmk.Wq()+"\n";
        salida += " W = "+modelo_mmk.W()+"\n";
        salida += " Pw = "+modelo_mmk.Pw()+"\n";
        

        if (mmk_n!="") {
            mmk_n = Number(document.getElementById("mmk_n").value);
            salida += " Pn = "+modelo_mmk.Pn(mmk_n)+"\n";
            salida += " P(Wq = 0) = "+modelo_mmk.P_Wq_igual(mmk_n)+"\n";
        }

        if (mmk_n!="" && mmk_t!="") {
            mmk_n = Number(document.getElementById("mmk_n").value);
            mmk_t = Number(document.getElementById("mmk_t").value);
            salida += " P(Wq > t) = "+modelo_mmk.P_Wq_mayor(mmk_n,mmk_t)+"\n";
        }

        if (mmk_t!="") {
            mmk_t = Number(document.getElementById("mmk_t").value);
            
            salida += " P(W > t) = "+modelo_mmk.P_w_mayor(mmk_t)+"\n";
        }
        salida += "\n";

        let tempo = textMap.get("code_mmk");    //Obtengo el textarea de la pestaña
        tempo.setValue(salida);
    }
    catch (err) {
        console.log(err);
    }
}

function mg1(){
    
    console.log("-> Modelo M/G/1");
    try { 
        let mg1_λ = Number(document.getElementById("mg1_λ").value);
        let mg1_μ = Number(document.getElementById("mg1_μ").value);
        let mg1_σ = Number(document.getElementById("mg1_σ").value);

        let modelo_mg1 = new MG1(mg1_λ,mg1_μ,mg1_σ);

        let salida = "";
        salida += " Caracteristicas Operativas de Sistema - MODELO MG1"+"\n";
        salida += " El sistema tiene capacidad: "+modelo_mg1.capacidad()+"\n";
        salida += " ρ = "+modelo_mg1.ro()+"\n";
        salida += " Po = "+modelo_mg1.p0()+"\n";
        salida += " Lq = "+modelo_mg1.Lq()+"\n";
        salida += " L = "+modelo_mg1.L()+"\n";
        salida += " Wq = "+modelo_mg1.Wq()+"\n";
        salida += " W = "+modelo_mg1.W()+"\n";
        salida += " Pw = "+modelo_mg1.Pw()+"\n";
        salida += "\n";

        let tempo = textMap.get("code_mg1");    //Obtengo el textarea de la pestaña
        tempo.setValue(salida);
    }
    catch (err) {
        console.log(err);
      
    }

}

function mm1_finito(){
    
    console.log("-> Modelo M/M/1 FINITO");
    try { 
        
        let mm1_f_λ = Number(document.getElementById("mm1_f_λ").value);
        let mm1_f_μ = Number(document.getElementById("mm1_f_μ").value);  
        let mm1_f_N = Number(document.getElementById("mm1_f_N").value);     
        let mm1_f_K = Number(document.getElementById("mm1_f_K").value);
       
        let modelo_mm1finito = new MM1Finito(mm1_f_λ,mm1_f_μ,mm1_f_N,mm1_f_K);

        let salida = "";
        salida += " Caracteristicas Operativas de Sistema - MODELO MM1 Finito\n";
        salida += " El sistema tiene capacidad: "+modelo_mm1finito.capacidad()+"\n";
        salida += " Po = "+modelo_mm1finito.p0()+"\n";
        salida += " Lq = "+modelo_mm1finito.Lq()+"\n";
        salida += " L = "+modelo_mm1finito.L()+"\n";
        salida += " Wq = "+modelo_mm1finito.Wq()+"\n";
        salida += " W = "+modelo_mm1finito.W()+"\n";
        salida += " Pn = "+modelo_mm1finito.Pn(4)+"\n"; //Le mando la n unidads que quiero saber la probabilidad que que esten en el sistema
        salida += " Pw = "+modelo_mm1finito.Pw()+"\n";
        salida += "\n";

        let tempo = textMap.get("code_mmm1_f");    //Obtengo el textarea de la pestaña
        tempo.setValue(salida);
       
    }
    catch (err) {
        console.log(err);
      
    }

}