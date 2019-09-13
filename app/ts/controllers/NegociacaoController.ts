class NegociacaoController {

private _inputData : HTMLInputElement;
private _inputQuantidade: HTMLInputElement ;
private _inputValor: HTMLInputElement;
private _negociacoes = new Negociacoes();
private _negociacoesView = new NegociacoesView("#negociacoesView");
private _mensagemView = new MensagemView("#mensagemView");

constructor(){

	this._inputData = <HTMLInputElement> document.querySelector('#data');
	this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
	this._inputValor = <HTMLInputElement> document.querySelector('#valor');

	       // atualiza a view para exibir os dados do modelo, vazio
	this._negociacoesView.update(this._negociacoes);
}

adiciona(event: Event){

	event.preventDefault();

	const negociacao = new Negociacao(
		new Date(this._inputData.value.replace('/-/g', ',')),
		parseInt(this._inputQuantidade.value),
		parseFloat(this._inputValor.value)
	);

	
	this._negociacoes.adiciona(negociacao);

        // depois de adicionar, atualiza a view novamente para refletir os dados
	this._negociacoesView.update(this._negociacoes);
	this._mensagemView.update("Negocia&ccedil&atilde;o adicinada com sucesso!")


/*	this._negociacoes.paraArray().forEach(element => {
		console.log(element.data);
		console.log(element.quantidade);
		console.log(element.valor);
	}); */
}


}