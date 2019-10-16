let {PythonShell} = require('python-shell')

function response(text, next){
    let options = {
        mode: 'text',
        scriptPath: '/Users/Yousef/Documents/myworkspace/ArticleApp/Bot/',
        args: ['-t', text]
      };
      
      PythonShell.run('bot.py', options, function (err, results) {
        //console.log('results: %j', results[0]);
         next({"resp": results[0]});
      });
}

module.exports.response = response
