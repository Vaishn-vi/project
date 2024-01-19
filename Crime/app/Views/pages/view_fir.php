<?php
   echo "<table border=7>";
   echo "<tr><td>id</td><td>username</td><td>location</td><td>date</td><td>time</td><td>crime</td></tr>";

   foreach($detail as $demo)
   {
      echo "<tr>";
      echo "<td>".$demo['id']."</td>";
      echo "<td>".$demo['username']."</td>";
      echo "<td>".$demo['location']."</td>";
      echo "<td>".$demo['date']."</td>";
      echo "<td>".$demo['time']."</td>";
      echo "<td>".$demo['crime']."</td>";
      echo "</tr>";
   }