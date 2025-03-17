function CALCULAR() {
    var idade = document.getElementById('idade').value
    var peso = document.getElementById('peso').value
    var res = document.getElementById('res_value')
    var liquido = 0

    if (idade.length == 0 || peso.length == 0) {
        alert('Verifique se o campo "idade" e "peso" foram preenchidos corretamente')
    }
    else{
        if (parseFloat(idade) <= 17) {
            liquido = (40 * parseFloat(peso)) / 1000

            res.innerHTML = ` Você precisa ingerir ${liquido.toFixed(1)}L de água por dia!`
        }
        else if (parseFloat(idade) <= 55) {
            liquido = (35 * parseFloat(peso)) / 1000

            res.innerHTML = ` Você precisa ingerir ${liquido.toFixed(1)}L de água por dia!`
        }
        else if (parseFloat(idade) <= 65) {
            liquido =  (30 * parseFloat(peso)) / 1000

            res.innerHTML = ` Você precisa ingerir ${liquido.toFixed(1)}L de água por dia!`
        }
        else if (parseFloat(idade) > 65) {
            liquido = (25 * parseFloat(peso)) / 1000

            res.innerHTML = ` Você precisa ingerir ${liquido.toFixed(1)}L de água por dia!`
        }
    }

}