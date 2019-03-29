$(document).ready(function(){
    timer();
    /**
     * configurando um range de scroll para o conteúdo da seção 
     * aparecer em tela
     */
    $(window).scroll(function(){
        if(window.pageYOffset > 1000)
            $("#caixa_solucoes").fadeIn(700);
        
        if(window.pageYOffset > 1400 )
            $("#painel_clientes").fadeIn(700);
        
        if(window.pageYOffset > 1900)
            $("#formulario").fadeIn(700);
        
    });
    $("#a_inicio").click(function(){
        keepAsHover("#item_inicio");
    });

    $("#a_sobre").click(function(){
        keepAsHover("#item_sobre");
    });
    
    $("#a_solucao").click(function(){
        $("#caixa_solucoes").fadeIn(700);
        keepAsHover("#item_solucao");
    });

    $("#a_clients").click(function(){
        $("#painel_clientes").fadeIn(700);
        keepAsHover("#item_clientes");
    });
    
     $("#a_contatos").click(function(){
        $("#formulario").fadeIn(700);
        keepAsHover("#item_contatos");
    });

   
});

timer = () => {
    setTimeout(showPage, 1800);
    //setTimeout(autoScroll, 3500);
}

function showPage(){
   $("#loading_box").fadeOut(900);
   $("#principal").fadeIn(2300);
   $("header").fadeIn(2300); 
   $("footer").fadeIn(2300); 
   
}
/**
 * essa function faz a page scrollar de acordo com o num inserido em
 * window.scrollBy() e captura a posição do scroll
 */
function autoScroll(){
    window.scrollBy(0, 1450);
    alert(window.pageYOffset);
}

function keepAsHover(id){
    $("div").removeClass("itens_active");
    $(id).addClass('itens_active centralizarY');
}



