
  <!-- Navbar
    ================================================== -->
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="./indexzz.php">Acc</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active">
                <a href="./indexzz.php">Accueil</a>
              </li>
              
              <li class="dropdown">
                  <a data-toggle="dropdown" class="dropdown-toggle" href="#">Fleurs  <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                      <li><a href="lister.php">Lister</a></li>
                      <li><a href="rechercher.php">Rechercher</a></li>

                    <?php if (estVisiteurConnecte()){?>
                      <li><a href="ajouter.php">Ajouter</a></li>
                      <li><a href="supprimer.php">Supprimer</a></li>
                     <?php }?> 
                  </ul>
              </li>
              <?php if (estAdministrateurConnecte()){?>
              <li class="dropdown">
                  <a data-toggle="dropdown" class="dropdown-toggle" href="#">Utilisateur  <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                      <li><a href="listerUtilisateure.php?type_uti=admin">Lister les admin</a></li>
                      <li><a href="listerUtilisateure.php?type_uti=client">Lister les client</a></li>
                      <li><a href="ajouterUti.php">Ajouter uti</a></li>
                      <li><a href="modifierUti.php">modifier uti</a></li>

                      
                  </ul>
              </li>
              
              <?php }?> 
              
              
                                         
              <li class="nav">
                <a href="lister.php?categ=bul">Bulbes</a>
              </li>
              <li class="nav">
                <a href="lister.php?categ=ros">Rosiers</a>
              </li>
              <li class="nav">
                <a href="lister.php?categ=mas">Massifs</a>
              </li>
              <li><a href="login.php">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>

