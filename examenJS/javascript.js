$(document).ready(function(){
    //lorqu'on appuie sur le bouton generer password
    $('#genererPassword').on('click', function(){
       
        let password = Math.random().toString(36).slice(-8); // on declare une variable password à laquelle on associe la formule math qui generer le mot aléatoire
        $('#password').val(password); //on assigne a password la valeur de la variable
        $('#password2').val(password); // pareil pour la deuxieme case

    });

    $('button:last').on('click',function(){
        //
        if($(this).is('checked')) {
            
                $("#password").prop("type", "text");
                $("#password2").prop("type", "text");
            } else 
            {
                $("#password").prop("type", "password");
                $("#password2").prop("type", "password");
            }
        });

        //verif champ
        $(document).ready(function(){
            if ('input' === ''){
                $('.inscription:button').removeAttr('disabled');
            } 
        });
        // on sélectionne la couleur
        $('#couleur').on('click', function(){
            let color = this.couleur; // on enregistre la couleur choisi
            $('.container').css('background-color', color); // on sélectionne la couleur choisi
            $('.container').css('witdh', '100 px'); // on défini la largeur
            $('.container').css('height', '100 px'); // on defini la hauteur

        });
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: '',
            inscription: function(){
                if(this.inscription == true){
                    $('.message').css('border', '1px solid green');
                } else {
                    $('.message').css('border', '1px solid red');
                }
            }
        });

        $('#email_login').on('blur', function(){
            $(this) = $('#email');
        });
        $('#passwordl_login').on('blur', function(){
            $(this) = $('#password');
        });

        $( function() {
            $( "#draggable" ).draggable();
            $( "#droppable" ).droppable({
              drop: function( event, ui ) {
                $( this )
                  .addClass( "ui-state-highlight" )
                  .find( "p" )
                    .html( "C'est bon!" );
              }
            });
          } );

          $('.connection:button').is('check', function(){
            if($('#droppable' === true)){
                $(this).removeAttr('disabled');
            }
          });

        function createObject(){
            if($('connection:button' == true)){
                function Identifiant(email, password, color){
                this.email = email,
                this.password = password,
                this.color = color
                }
            }
        }
});




