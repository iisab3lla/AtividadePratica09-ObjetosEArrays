// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.

let notebook = {
    Processador: "i7",
    Memoria: "16GB",
    Preco: 5000,
    HD: "1TB",
    SSD: "256GB"
}

document.write(`Notebook <br> Processador: ${notebook.Processador} <br> Memória: ${notebook.Memoria} <br> Preço: ${notebook.Preco} <br> HD: ${notebook.HD} <br> SSD: ${notebook.SSD}`);

console.log(`           Notebook: 
                        ${notebook.Processador} 
                        ${notebook.Memoria} 
                        ${notebook.Preco} 
                        ${notebook.HD} 
                        ${notebook.SSD}`)