class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
				${model.paraArray().map(negociacao =>
					`
                    <tr>
                        <td>${negociacao.data.getDate()+1}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>					
					`
					).join('')}
            <tbody>
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }


}