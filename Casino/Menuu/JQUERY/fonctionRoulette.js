var mise = parseInt($('#miseUtilisateur').val());
var cagnotte = parseInt($('#cagnotteUtilisateur').val());

function LancerRoulette()
{
    var mise = parseInt($('#miseUtilisateur').val());
    var cagnotte = parseInt($('#cagnotteUtilisateur').val());

    if( $('#miseUtilisateur').val() === "" || mise > cagnotte || mise < 1)
    {
        alert("Veuillez entrer une valeur correct !");
    }
    else
    {
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
        alert("NON PREND PAS TOUTE MA TUNE");
        // $('#cagnotteUtilisateur').val() + parseInt(($('#miseDeUser').val())*5);

        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt(($('#miseUtilisateur').val()))*5);
    }
    else if(($('#aGauche').css('top')) == ($('#milieu').css('top')) || ($('#milieu').css('top')) == ($('#aDroite').css('top')) || ($('#aGauche').css('top')) == ($('#aDroite').css('top')))
    {
        // $('.para').show();
        alert("BRAVO TU AS GAGNER");
        // $('#cagnotteUtilisateur').val() + parseInt(($('#miseDeUser').val())*2);
        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) + parseInt(($('#miseUtilisateur').val()))*2);
    }
    else
    {
        alert("T'ES NUL T'AS PERDU");
        // $('#cagnotteUtilisateur').val() - parseInt(($('#miseDeUser').val()));
        $('#cagnotteUtilisateur').val(parseInt($('#cagnotteUtilisateur').val()) - parseInt(($('#miseUtilisateur').val())));
    }
}