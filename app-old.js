const http = require('http');

// req: todo lo del header
// res: todo lo que se va a responder
http.createServer((req, res)=>{

    /*
    console.log(req);

    res.setHeader('Content-Disposition', 'attachment;filename=lista.csv');
    res.writeHead(200, {
        // 'Content-Type' : 'text/plane'
        // 'Content-Type' : 'Application/json'

        
        'Content-Type' : 'Application/csv'
    });
    */

    // const persona = {
    //     id:1,
    //     nombre:'fredy'
    // }

    // res.write(JSON.stringify(persona));
    res.write('Hola Mundo');
    // res.write('1;Fredy\n');
    // res.write('2;Sandy\n');
    // res.write('3;Michi\n');
    // res.write('4;Toby\n');

    res.end();

})
.listen(8080);

console.log('escuchando el puerto', 8080);