<?php
   echo "<table border=7>";
   echo "<tr><td>id</td><td>name</td><td>mobile_no</td><td>email</td><td>address</td><td>password</td></tr>";

   foreach($detail as $demo)
   {
      echo "<tr>";
      echo "<td>".$demo['id']."</td>";
      echo "<td>".$demo['name']."</td>";
      echo "<td>".$demo['mobile_no']."</td>";
      echo "<td>".$demo['emailaddress']."</td>";
      echo "<td>".$demo['address']."</td>";
      echo "<td>".$demo['password']."</td>";
      echo "</tr>";
   }