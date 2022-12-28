

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit1');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var final = document.getElementById('final');

function novaQuestao(numero_pergunta){
    var pergunta_atual = numero_pergunta - 1;

    var prox_pergunta = document.getElementById('question-' + numero_pergunta.toString());
    console.log('próxima pergunta :'+ numero_pergunta);
    var esta_pergunta = document.getElementById('question-' + pergunta_atual.toString());
    console.log('esta pergunta :'+ pergunta_atual);

    esta_pergunta.style.display = 'none';
    prox_pergunta.style.display = 'block';
};

function carregarValidando(){
    var el_validando = document.getElementById('question-6');
    var el_question_5 = document.getElementById('question-5');

    el_validando.style.display = 'block';
    el_question_5.style.display = 'none';
}

function carregarFinal(){
    var el_validando = document.getElementById('question-6');
    var el_final = document.getElementById('final');

    el_validando.style.display = 'none';
    el_final.style.display = 'block';
}

submit1.addEventListener('click', function(){
    novaQuestao(2)
});

submit2.addEventListener('click', function(){
    novaQuestao(3)
});

submit3.addEventListener('click', function(){
    novaQuestao(4)
});

submit4.addEventListener('click', function(){
    novaQuestao(5)
});

submit5.addEventListener('click', function(){
    carregarValidando();
    setTimeout(carregarFinal, 2000);
});

