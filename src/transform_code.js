const recast = require("recast");
const path = require('path')
// const chalk = require('chalk')
const fs = require('fs')
const {
    variableDeclaration,
    variableDeclarator,
    functionExpression
} = recast.types.builders
const {parse,print} = recast
 const transformCode = (params)=>{
    fs.readFile(path.resolve(params), (err,data)=>{
        if (err) throw new Error('read file error')
        const code = data.toString()
        const ast = parse(code);
        const {program} = ast;
        program.body[0]=variableDeclaration('const', [
            variableDeclarator(program.body[0].id, functionExpression(
                null, // 这里弄成匿名函数即可
                program.body[0].params,
                program.body[0].body
            ))
        ])
        const output = print(ast).code
        fs.writeFile(path.resolve(params), output, (err)=>{
            if (err) throw new Error('write file error')
            console.log('writeFile done!😄')
        })
    })
}
module.exports=transformCode