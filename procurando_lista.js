const alunos = ['Joao', 'Juliana', 'Ana','Caio'];
const medias = [10,8,7.5,9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){

        console.log(`${aluno} está cadastrado`);

        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaDeAluno = listaDeAlunosEMedias[1][indice]
        
        console.log(`A média do ${aluno} é ${mediaDeAluno}`)
    } else{
            console.log("Aluno não encontrado");
        }
        
    }

exibeNomeENota("Juliana");