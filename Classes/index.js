class PC{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.armazenamento = armazenamento
        this.video = video
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

exibirInfo(){
    console.log('Informações do computador')
    console.log(`Tipo: ${this.tipo}`)
    console.log(`Processador: ${this.processador}`)
    console.log(`Video: ${this.video}`)
    console.log(`Armazenamento: ${this.armazenamento}`)
    console.log(`Memoria RAM: ${this.memoriaRam}`)
    console.log(`SSD: ${this.ssd}`)
}

}

const meuPc = new PC('Notebook', 'Ryzen 7', 'Dedicado', 500, 8, true)
meuPc.exibirInfo();

