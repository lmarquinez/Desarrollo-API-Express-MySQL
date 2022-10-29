INSERT INTO `blog_model`.`authors` (`name`, `email`, `image`) VALUES ('Laura', 'laura@gmail.com', 'https://cdnjs.unir/images/image_laura');
INSERT INTO `blog_model`.`authors` (`name`, `email`, `image`) VALUES ('Maitane', 'maitane@gmail.com', 'https://cdnjs.unir/images/image_maitane');

SELECT * FROM blog_model.authors;
SELECT * FROM blog_model.authors AS a WHERE a.authorId = 2;

INSERT INTO `blog_model`.`posts` (`title`, `description`, `category`, `authorid`) VALUES ('Lorem ipsum', 'adlnk asdkn joln nld nlkad nlnds lnkda asdnkl', 'Sport', '1');
INSERT INTO `blog_model`.`posts` (`title`, `description`, `category`, `authorid`) VALUES ('Lorem ipsum', 'adlnk asdkn joln nld nlkad nlnds lnkda asdnkl', 'Sport', '1');
INSERT INTO `blog_model`.`posts` (`title`, `description`, `category`, `authorid`) VALUES ('Ipsum lorem', 'asdn sakdn ihnjk nsda , aisdhad knkd ihoas asdm', 'Politic', '2');

SELECT * FROM blog_model.posts;
SELECT * FROM blog_model.posts AS p WHERE p.postId=2;

SELECT * FROM blog_model.authors AS a INNER JOIN blogModel.posts AS p ON a.authorId = p.postId WHERE a.authorId=2;