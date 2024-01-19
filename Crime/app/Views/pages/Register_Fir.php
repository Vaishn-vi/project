
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Register Fir</title>
  </head>
  <body>
    <div class="container my-5 mx-5" >
    <h2>Register Fir</h2>
    <form action="<?php echo site_url('/addfir');?>" method="post">
    <div class="container my-2 mx-5" >
    <div class="mb-3 col-8">
    <label for="exampleInputid" class="form-label">id</label>
    <input type="text" class="form-control" name="id" id="exampleInputid" >
  </div>
  <div class="mb-3 col-8">
    <label for="exampleInputName" class="form-label">username </label>
    <input type="Text" class="form-control" name="username" id="exampleInputName" >
  </div>
  <div class="mb-3 col-8">
    <label for="exampleInputlocation" class="form-label">location</label>
    <input type="Text" class="form-control" name="location" id="exampleInputlocation">
  </div>
  <div class="mb-3 col-8">
    <label for="exampleInputdate" class="form-label">Date</label>
    <input type="date" class="form-control"name="date"  id="exampleInputdate">
  </div>
  <div class="mb-3 col-8">
    <label for="exampleInputtime" class="form-label">Time</label>
    <input type="time" class="form-control" name="time" id="exampleInputtime">
  </div>
  <div class="mb-3 col-8">
    <label for="exampleInputcrime" class="form-label">Crime</label>
    <input type="text" class="form-control" name="crime" id="exampleInputcrime">
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
</div>
</div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>
