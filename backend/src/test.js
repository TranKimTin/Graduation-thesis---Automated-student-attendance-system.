process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (input) {
   for(let s of input.split('\s')){
        s = s.trim();
        console.log(s);
        let operator = s.split(/[0-9]+/gi);
        let num = s.split(/\+|\-/gi);

        console.log(num, operator)
   }
});
