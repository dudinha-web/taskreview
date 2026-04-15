const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("container-list");

// Função para criar constante task (tarefa) com o valor do input do usuário
function addTask() {
    const task = inputBox.value.trim(); // A função trim remove espaços no início ou final do input
    
    if (!task) { // Se não houver input, o aviso é acionado
        alert("Por favor, escreva uma tarefa"); 
        return;
    }

    const li = document.createElement("li"); // Criando elemento na lista de tarefas (ul > li)

    // Bloco de código HTML adicioando após a inserção de tarefa
    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span>${task}</span>
    </label>
    <span class="editar-btn">Editar</span>
    <span class="excluir-btn">Excluir</span>
    `;

    listContainer.appendChild(li); // Onde de fato a tarefa é adicionada a lista
    inputBox.value = ""; // Limpar input pós inserção de tarefa

    // Funcionalidades dos botões das tarefas - Deletar, editar
    const checkbox = li.querySelector("input");
    const editarBtn = li.querySelector(".editar-btn");
    const taskSpan = li.querySelector("span");
    const excluirBtn = li.querySelector(".excluir-btn");

    checkbox.addEventListener("click", function () {
    li.classList.toggle("concluido", checkbox.checked);
    });

    // Função para editar tarefa
    editarBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
    }
    });

    // Remover tarefa
    excluirBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
        li.remove();
    }
    });

}

