<?php
   echo "<table border=7>";
   echo "<tr><td>name</td><td>mobile_no</td><td>designation</td></tr>";

   foreach($detail as $demo)
   {
      echo "<tr>";
      echo "<td>".$demo['name']."</td>";
      echo "<td>".$demo['mobile_no']."</td>";
      echo "<td>".$demo['designation']."</td>";
      echo "</tr>";
   }