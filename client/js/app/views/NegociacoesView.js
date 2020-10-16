class NegociacaoView extends View {

    constructor(elemento){
        super(elemento);
    }

    template(model) {
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>OPERAÇÂO</th>
                <th>PAPEL</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        ${model.negociacoes.map(n => `
            
            <tr>
                <td>${DateHelper.dataParaTexto(n.data)}</td>
                <td>${n.operacao}</td>
                <td>${n.papel}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
            </tr>
            
        `).join('')}
        </tbody>
        
        <tfoot>
            <td colspan="5"></td>
            <td>
                ${model.negociacoes.reduce((total, n) => {
                    return total + n.volume;
                }, 0.0)}
            </td>
        </tfoot>
        </table>`
    }
}