<?php
$blogs = json_decode(file_get_contents('blogs.json'), true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Blog</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>Travel Blog</h1>
            <nav>
                <a href="index.php">Home</a>
                <a href="submit.php">Submit a Post</a>
            </nav>
        </div>
    </header>

    <main class="container my-5">
        <div id="blog-content" class="row">
            <?php foreach ($blogs as $blog): ?>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="<?php echo $blog['image']; ?>" class="card-img-top" alt="<?php echo $blog['title']; ?>">
                        <div class="card-body">
                            <h5 class="card-title"><?php echo $blog['title']; ?></h5>
                            <p class="card-text"><?php echo $blog['content']; ?></p>
                            <p class="card-text"><small><?php echo $blog['author']; ?> | <?php echo $blog['date']; ?></small></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </main>

    <footer class="footer">
        <p>&copy; 2024 Travel Guide. All rights reserved.</p>
    </footer>
</body>
</html>
