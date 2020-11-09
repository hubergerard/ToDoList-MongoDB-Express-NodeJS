
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'TodoList', h1: 'Ma TodoList !'});
};

exports.remove = function(req, res){
  res.render('remove', {title: 'TodoList', h1: 'Supprimer un élement!'})
};
