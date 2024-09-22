<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $author = $_POST['author'];
    $content = $_POST['content'];
    $date = date('Y-m-d');
    $image = 'uploads/' . basename($_FILES['image']['name']);
    
    // Validate data here (e.g., check if fields are empty)
    
    // Move uploaded file
    move_uploaded_file($_FILES['image']['tmp_name'], $image);
    
    // Read existing blog posts
    $blogs = json_decode(file_get_contents('blogs.json'), true);
    
    // Append new blog post
    $blogs[] = [
        'title' => $title,
        'author' => $author,
        'content' => $content,
        'date' => $date,
        'image' => $image
    ];
    
    // Save back to JSON file
    file_put_contents('blogs.json', json_encode($blogs));
    
    header('Location: main.html'); // Redirect to the main page
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit a Post</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container my-5">
        <h2>Submit a Blog Post</h2>
        <form action="submit.php" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" name="title" required>
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" class="form-control" name="author" required>
            </div>
            <div class="form-group">
                <label for="content">Content</label>
                <textarea class="form-control" name="content" rows="5" required></textarea>
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" class="form-control" name="image" accept="image/*" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>
</html>
