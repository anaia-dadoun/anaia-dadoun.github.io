

<!-- Affichage des informations sur les fleurs-->

<div class="container">

    <table class="table table-bordered table-striped table-condensed">
      <caption>
<?php
    if (isset($type))
    {
?>
        <h3><?php echo $type;?></h3>
<?php    
    }
?>
      </caption>
      <thead>
<?php
if (count($lutilisateur) > 0)
{
?>
        <tr>
          <th>ID</th>
          <th>NOM</th>
          <th>CAT</th>
         
         </tr>
<?php
}
else
{
 echo "<h1>Aucun client ne correspond � votre recherche</h1>";
}
?>
      </thead>
      <tbody>  
<?php
    $i = 0;
    while($i < count($lutilisateur))
    { 
 ?>     
        <tr>
            
            <td><?php echo $lutilisateur[$i]["unId"]?></td>
            <td><?php echo $lutilisateur[$i]["unNom"]?></td>
            <td ><?php echo $lutilisateur[$i]["unCat"]?></td>
           
         </tr>
<?php
        $i = $i + 1;
     }
?>       
       </tbody>       
     </table>    
  </div>

 
