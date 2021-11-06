var mise = parseInt($('#mise').val());
var cagnotte = parseInt($('#cagnotte').val());

function LancerRoulette()
{
    var mise = parseInt($('#mise').val());
    var cagnotte = parseInt($('#cagnotte').val());

    if( $('#mise').val() === "" || mise > cagnotte || mise < 1)
    {
        alert("Veuillez saisir une valeur");
    }
    else
    {
        $('#imgAnim').attr('src',"../IMAGES/image-vide.png");
        $('#roulette ul').playSpin({
            onFinish : function(){
                Calculer();
            }
        });
    }
}

function Calculer()
{

    if(($('#aGauche').css('top')) == ($('#milieu').css('top')) && ($('#milieu').css('top')) == ($('#aDroite').css('top')))
    {
        // alert("C'EST LE JACKPOT");
       
        $('#imgAnim').attr('src',"../IMAGES/jackpot.gif");

        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*5);
    }
    else if(($('#aGauche').css('top')) == ($('#milieu').css('top')) || ($('#milieu').css('top')) == ($('#aDroite').css('top')) || ($('#aGauche').css('top')) == ($('#aDroite').css('top')))
    {
        // alert("TU AS GAGNE");

        $('#imgAnim').attr('src',"../IMAGES/victoire.gif");
        
        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*2);
    }
    else
    {
        // alert("TU AS PERDU");

        $('#imgAnim').attr('src',"../IMAGES/defaite.gif");
        
        $('#cagnotte').val(parseInt($('#cagnotte').val()) - parseInt(($('#mise').val())));
    }
}