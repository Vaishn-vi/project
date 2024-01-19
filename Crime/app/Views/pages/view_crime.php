<?php
   echo "<table border=7>";
   echo "<tr><td>id</td><td>name</td><td>crime_type</td><td>crime_desc</td></tr>";

   foreach($detail as $demo)
   {
      echo "<tr>";
      echo "<td>".$demo['id']."</td>";
      echo "<td>".$demo['name']."</td>";
      echo "<td>".$demo['crime_type']."</td>";
      echo "<td>".$demo['crime_desc']."</td>";
      echo "</tr>";
   }