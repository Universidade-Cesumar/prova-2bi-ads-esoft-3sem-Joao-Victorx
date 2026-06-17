const API = "https://6a29b579f59cb8f65f1d8502.mockapi.io/api/v1/produtos";

/*======================= REGRA DE NEGÓCIO =======================*/
function validarRetirada(estoqueAtual, quantidadeRetirada) {
    if (quantidadeRetirada <= 0) {
        return false;
    }
    if (quantidadeRetirada > estoqueAtual) {
        return false;
    }
    return true;
}

/*================================ LISTAR PRODUTOS ===================================*/
async function listaMateriais() {
    try {
        const resposta = await fetch(API);
        const produtos = await resposta.json();
        const corpoTabela = document.getElementById("lista-materiais");
        corpoTabela.innerHTML = "";
        produtos.forEach((produto, index) => {
            corpoTabela.innerHTML += `
                <tr>
                    <td class="text-center text-muted fw-bold">${index + 1}</td>
                    <td class="fw-semibold text-dark">${produto.nome}</td>
                    <td class="text-center">
                        <span class="badge ${produto.quantidade > 0 ? 'bg-primary' : 'bg-danger'} rounded-pill px-3">
                            ${produto.quantidade}
                        </span>
                    </td>
                    <td class="text-center">
                        <button
                            class="btn btn-warning btn-sm btn-baixar" onclick="baixarMaterial('${produto.id}', ${produto.quantidade})">Baixar</button>
                        <button
                            class="btn btn-danger btn-sm btn-excluir" onclick="excluirMaterial('${produto.id}')">
                            Excluir</button>
                    </td>
                </tr>
            `;
        });
    } catch (erro) {
        console.error("Erro ao buscar dados do almoxarifado:", erro);
    }
}

/*================================ CADASTRAR PRODUTOS ===================================*/

document.getElementById("formProduto").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("input-nome").value;
    const quantidade = document.getElementById("input-quantidade").value;
    const novoProduto = {
        nome: nome,
        quantidade: parseInt(quantidade)
    };
    try {
        const resposta = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoProduto)
        });
        if (resposta.ok) {
            document.getElementById("formProduto").reset();
            listaMateriais();
        }
    } catch (erro) {
        console.error("Erro ao cadastrar material:", erro);
    }
});
listaMateriais();